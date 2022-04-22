

import Like from '../../model/Like'
import Post from '../../model/Post'
import mongoose from 'mongoose'

import { Request,Response,NextFunction } from 'express'
import { find_by_uid, find_post_by_id, find_like_by_uid } from '../main'


const likeComment = async (req: Request, res: Response, next: NextFunction) => {
  const { uid, postId } = req.body    
  const user = await find_by_uid(uid)
  const post = await find_post_by_id(postId)
  
  const exist = await find_like_by_uid(uid,postId)
  let addRemove: boolean = true

  if(user === null)
    {
      res.status(401).json({
        message: 'Unauthorized'
      })
      return
    }
  if(post === null)
    {
      res.status(401).json({
        message: 'Something went wrong'
      })
      return
    }
  
  if(exist) 
    {
      const like = new Like({
        uid,
        postId: new mongoose.Types.ObjectId(postId) 
      })
      await like.save() 
    }

  else
    {
      await Like.findOneAndDelete({ uid,postId })
      addRemove = false
    }
  
  const count: number = await Like.find({ postId }).count()
  
  res.locals.count = count
  res.locals.data = addRemove
  next()
  return
}

export default likeComment
