import * as Yup from 'yup'
import User from '@models/User'

const EmailConfirmSchema = Yup.object().shape({
    token: Yup.string().required()
})

export default async (req, res, next) =>{
    try {
        var {token} = req.body
        await EmailConfirmSchema.validate(req.body)
        const user = await User.findOne({emailConfirmedCode: token})

        if(!user)   throw new Yup.ValidationError(
            'Invalid',
            req.body,
            'token'
        )

        req.user = user
        
        return next();

    } catch (error) {
        return res.status(422).json({
            [error.path]: [error.message]
        })
    }
}