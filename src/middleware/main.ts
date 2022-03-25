import { DUser, _IUser } from '../interface/user'
import User from '../model/User'
import Post from '../model/Post'


export const find_by_email = async(email: string) => {
  const user = await User.findOne({ email })
  return user
}
export const find_by_uid = async (uid: string) => {
  const user = await User.findOne({ uid })
  return user
}
export const find_by_token = async (token: string) => {
  const user  = await User.findOne({ token }) 
  return user
}

export const find_all_post = async () => {
  const post = await Post.find()
  return post
}

export const find_post_by_id = async (uid: string) => {
  const post = await Post.find({ userUid: uid })
  return post
}
