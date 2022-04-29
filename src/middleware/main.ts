import mongoose from 'mongoose'
import { DUser, _IUser } from '../interface/user'
import User from '../model/User'
import Post from '../model/Post'
import Like from '../model/Like'
import Comment from '../model/Comment'
import Follow from '../model/Follow'


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

export const find_post_by_uid = async (uid: string) => {
  const post = await Post.find({ userUid: uid })
  return post
}

export const find_post_by_id = async (_id: string) => {
  if(mongoose.isValidObjectId(_id))
     {
       return await Post.findOne({ _id })
     }
  return false
}

export const find_comment_by_post_id = async (postId: string) => {
  if(mongoose.isValidObjectId(postId))
    {
      return await Comment.find({ postId })
    }
    return []
}

export const find_like_by_uid = async (uid: string, postId: string) => {
  const user = await Like.findOne({ uid, postId })
  if( !user )
    {
      return true 
    }
  return false
}


export const find_follow_by_uid = async ( userUid: string, followUid: string ) => {
  const follow = await Follow.findOne({ userUid, followUid })
  if(follow)
    {
      return true
    }
  return false
}

export const find_follow_by_followerUid = async( userUid: string ) => {
  const follower = await Follow.find({followUid: userUid})
  return follower
}

export const find_follow_by_both = async ( userUid: string, followUid: string) => {
  const isExist = await Follow.findOne({ userUid, followUid })
  if(isExist)
    {
      return true
    }
  return false
}



