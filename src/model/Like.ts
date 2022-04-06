import mongoose from 'mongoose'


const likeSchema = new mongoose.Schema({
  uid: {
    type: String,
    ref: 'User'
  },
  postId: {
    type: String,
    ref: 'Post'
  }
},{ timestamps: true })

const Like = mongoose.model('like', likeSchema)

export default Like 
