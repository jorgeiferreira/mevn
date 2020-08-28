import User from '@models/User'
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
    const {email} = req.body

    const user = await User.findOne({email})

    await user.forgotPassword()

    return res.json({
        message: 'Password reset link sent.'
    })
}

export default {
    login,
    register,
    forgotPassword
}
