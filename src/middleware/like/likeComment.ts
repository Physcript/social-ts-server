

import Like from '../../model/Like'

import { Request,Response,NextFunction } from 'express'
import { find_by_uid, find_post_by_id, find_like_by_uid } from '../main'


const likeComment = async (req: Request, res: Response, next: NextFunction) => {
  const { uid, postId } = req.body    
  const user = await find_by_uid(uid)
  const post = await find_post_by_id(postId)
  const exist = await find_like_by_uid(uid)

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
        postId 
      })
      await like.save() 
    }

  else
    {
      await Like.findOneAndDelete({ uid })
    }
  
  const count: number = await Like.find({}).count()
  
  res.locals.count = count

  next()
  return
}

export default likeComment
