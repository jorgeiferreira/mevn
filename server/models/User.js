import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({

    name:String,
    email:String,
    createAt: Date,
    updatedAt: Date,
    password: String,
    emailconfirmedAt:Date,
    emailConfirmedCode:String

});

export default mongoose.model('User', UserSchema)