import mongoose from 'mongoose'
 
const UserSchema = new mongoose.Schema({
    firstName:{ type: String },
    lastName:{ type: String },
    email: { type: String },
    contacts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }],
    datetimes: true,
})

export const UserModel = mongoose.model('User', UserSchema)