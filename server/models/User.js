import mongoose from 'mongoose'
import Bcrypt from 'bcryptjs'
import Random from 'randomstring'
import Mail from '@fullstackjs/mail'
import config from '@config'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({

    name:String,
    email:String,
    createAt: Date,
    updatedAt: Date,
    password: String,
    emailconfirmedAt:Date,
    emailConfirmedCode:String

});

UserSchema.pre('save', function(){

    this.password = Bcrypt.hashSync(this.password)

    this.emailConfirmedCode = Random.generate(72);

    this.createAt = new Date()

})

UserSchema.post('save', async function(){

   await new Mail('confirm-account')
            .to(this.email, this.name)
            .subject("Confirmation email")
            .data({
                name:this.name,
                url:`${config.url}/auth/emails/confirm/${this.emailConfirmedCode}`
            })
            .send()

})

UserSchema.methods.generateToken = function(){
    return jwt.sign({id:this._id}, config.jwtSecret)
}

UserSchema.methods.comparePassword = function(plainPassword){
    return Bcrypt.compare(plainPassword, this.password)
}

export default mongoose.model('User', UserSchema)