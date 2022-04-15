import { NextFunction, Request, Response } from "express"
import mongoose from 'mongoose'
import Comment from '../../model/Comment'
import { find_post_by_id } from '../main'

const createMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { postId,body } = req.body
  const post = await find_post_by_id(postId)
  const user = res.locals.user
  
  if(body.trim().length == 0)
    {
      res.status(400).json({
        message: 'empty comment'
      })
      return
    }
  if(!post)
    {
      res.status(400).json({
        message: 'Post not found'
      })
      return
    }

  const comment = new Comment({
    uid: user.uid,
    postId: new mongoose.Types.ObjectId(post._id),
    body: body.trim()
  })
  
  await comment.save()

  next() 
  return
}

export default createMiddleware
