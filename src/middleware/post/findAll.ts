import mongoose from 'mongoose'
import { NextFunction, Request, Response } from "express"
import { IPost } from "../../interface/post"
import { find_all_post } from '../main'

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
        avatar: "$avatar",
        createdAt: "$createdAt",
        updatedAt: "$updatedAt"
      }
    },
    {
      $lookup: {
        from: 'likes',
        localField: '_id', 
        foreignField: 'postId',
        as: 'likesFields'
      }
    },
    {
      $project: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        body: 1,
        avatar: 1,
        createdAt: 1,
        updatedAt: 1,
        consts2: '$likesFields'
      }
    },

  ]) 
  console.log(_post)
  res.locals.post = post.reverse() 
  
  next()
  return
}

export default findAll
