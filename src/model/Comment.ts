import mongoose from 'mongoose'



const commentSchema = new mongoose.Schema({
  body: String,
  uid: {
    type: String,
    ref: 'User'
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }
}, { timestamps: true })

const Comment = mongoose.model('comment', commentSchema)
export default Comment
