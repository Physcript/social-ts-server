import mongoose from 'mongoose'


const likeSchema = new mongoose.Schema({
  uid: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  postId: {
    type: mongoose.Types.ObjectId,
    ref: 'Post'
  }
},{ timestamps: true })

const Like = mongoose.model('like', likeSchema)

export default Like 
