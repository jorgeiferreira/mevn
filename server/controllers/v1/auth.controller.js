import User from '@models/User'
import Bcrypt from 'bcryptjs'
import PasswordReset from '@models/PasswordReset'
import { response } from 'express'

const login = async (req, res) => {
    const {email,password}= req.body
    const user = await User.findOne({email})

    if(user && await user.comparePassword(password)){
        const token = user.generateToken()
        return res.json({
            user,
            token
        })
    }
    return res.status(400).json({
        "email":["User and password combination does not match"]
    })
}

const register = async (req, res) => {
    const {name, email, password}  = req.body
    const user = await User.create({
        name,
        email,
        password
    })

    const token = user.generateToken()

    return res.status(201).json({user, token})
}

const forgotPassword = async (req, res) => {

    await req.user.forgotPassword()

    return res.json({
        message: 'Password reset link sent.'
    })
}

const resetPassword = async (req, res) => {

    const {user}=req

    await User.findOneAndUpdate({
        email: user.email
    },{
        password: Bcrypt.hashSync(req.body.password)
    })

    await PasswordReset.findOneAndDelete({
        email:user.email
    })

    return res.json({
        message: 'Password reset successfuly.'
    })
}

const confirmEmail = async (req, res) => {
    const user = await User.findOneAndUpdate({
        email: req.user.email
    },{
        emailConfirmedCode:null,
        emailconfirmedAt: new Date()
    }, {
        new: true
    })

    const token = user.generateToken()

    return res.json({
        user,
        token
    })
}

export default {
    login,
    register,
    forgotPassword,
    resetPassword,
    confirmEmail
}
