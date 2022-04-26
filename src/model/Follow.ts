import mongoose from 'mongoose'

const followSchema = new mongoose.Schema({
  
  userUid: {
    // your uid
    type: String,
    ref: 'User'
  },
  followUid: {
    // follow uid
    type: String,
    ref: 'User'
  }
  

}, { timestamps: true })

const Follow = mongoose.model('Follow', followSchema)
export default Follow
