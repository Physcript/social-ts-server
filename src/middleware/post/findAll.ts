import mongoose from 'mongoose'
import { NextFunction, Request, Response } from "express"
import { IPost } from "../../interface/post"
import { find_all_post } from '../main'

import Like from '../../model/Like'
import Post from "../../model/Post"

const findAll = async (req: Request, res: Response, next:NextFunction ) => {
  const post: IPost[] = await find_all_post() ?? [] 
  const _post = await Post.aggregate([
    {
      $project: {
        _id: "$_id", 
        firstName: "$firstName",
        lastName: "$lastName",
        body: "$body",
        userUid: "$userUid",
        avatar: "$avatar",
        createdAt: "$createdAt",
        updatedAt: "$updatedAt"
      }
    },
    {
      $addFields: { userId: '$_id'.toString()   }
    },
    {
      $lookup: {
        from: 'likes',
        localField: 'userId',
        foreignField: 'postId',
        as: 'countLike'
      }
    },
    {
      $project: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        body: 1,
        avatar: 1,
        userUid: 1,
        createdAt: 1,
        updatedAt: 1,
        countLikes: { $size: { $ifNull: ['$countLike', []] } } 
      }
    },

  ])
  

  res.locals.post = _post.reverse() 
  
  next()
  return
}

export default findAll
