import mongoose from 'mongoose'
 
const CommentSchema = new mongoose.Schema({
    comment:{ type: String },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    },
    datetimes: true,
})
 
export const CommentModel = mongoose.model('Comment', CommentSchema)