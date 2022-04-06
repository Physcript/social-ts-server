

import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  body: String,
  avatar: String,
  userUid: {
    type: String,
    ref: 'User'
  }
},{ timestamps: true })

const Post = mongoose.model('Post', postSchema)
export default Post
