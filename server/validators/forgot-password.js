import * as Yup from 'yup'
import User from '@models/User'
import PasswordReset from '@models/PasswordReset'

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email().required(),
})

export default async (req, res, next) => {

    const {email} = req.body;
    try {

        await ForgotPasswordSchema.validate(req.body)

        const user = await User.findOne({email})

        if(!user) throw new Yup.ValidationError(
            'This user does not exists',
            req.body,
            'email'
        )
        
        const existingReset = await PasswordReset.findOne({email})

        if(existingReset)   throw new Yup.ValidationError(
            'Reset link already sent',
            req.body,
            'email'
        )

        req.user = user

        next()

    } catch (error) {
        return res.status(422).json({
            [error.path]: [error.message]
        })
    }
   

}


