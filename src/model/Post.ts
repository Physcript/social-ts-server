

import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  body: String,
  userUid: {
    type: String,
    ref: 'User'
  }
},{ timestamps: true })

const Post = mongoose.model('Post', postSchema)
export default Post
