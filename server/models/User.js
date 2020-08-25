import mongoose from 'mongoose'
import Bcrypt from 'bcryptjs'
import Random from 'randomstring'

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

export default mongoose.model('User', UserSchema)