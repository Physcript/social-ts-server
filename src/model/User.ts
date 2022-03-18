

import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  
  firstName: {
    type: String,
    lowercase: true,
  },
  lastName: {
    type: String,
    lowercase: true,
  },
  address: {
    type: String,
    lowercase: true
  },
  email: {
    type: String,
    lowercase: true
  },
  uid: {
    type: String
  },
  password: String,
  avatar: String,
  token: String

}, { timestamps: true })

const User = mongoose.model('User', userSchema)
export default User
