import { Request, Response, NextFunction } from 'express'
import { find_post_by_id, find_comment_by_post_id } from '../main'
import Comment from '../../model/Comment'

const getComment = async (req: Request, res: Response, next: NextFunction) => {
  const { postId } = req.body
  const post = await find_post_by_id(postId)
  const comment = await find_comment_by_post_id(postId)

  if(!post)
    {
      res.status(401).json({
        message: 'Post not found'
      })
      return
    }
  res.locals.comment = comment

  next()
  return
}

export default getComment
