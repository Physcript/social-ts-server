import { Request, Response, NextFunction } from 'express'
import { find_post_by_id, find_comment_by_post_id } from '../main'
import Comment from '../../model/Comment'
import mongoose from 'mongoose'

const getComment = async (req: Request, res: Response, next: NextFunction) => {
  const { postId, _skip, _limit } = req.body
  const post = await find_post_by_id(postId)
  const size = await Comment.find({ postId }).count()
  
  const comment = await Comment.aggregate([
    {
      $match: {
        postId: new mongoose.Types.ObjectId(postId)
      }
    },
    {
      $project: {
        _id: '$_id',
        body: '$body',
        uid: '$uid',
        postIds: '$postId',
        createdAt: '$createdAt',
        updatedAt: '$updatedAt'
      }
    },
    {
      $lookup: {
        from: 'users',
        localField: 'uid',
        foreignField: 'uid',
        as: 'user'
      }
    },
    {
      $unwind: '$user'
    },
    {
      $project: {
        _id: 1,
        body: 1,
        uid: 1,
        postIds: 1,
        createdAt: 1,
        updatedAt: 1,
        usr: '$user'
      }
    },
    {
      $project: {
        _id: 1,
        body: 1,
        uid: 1,
        postId: 1,
        createdAt: 1,
        updatedAt: 1,
        usr: {
          firstName: 1,
          lastName: 1,
          avatar: 1,
          uid: 1
        }
      }
    },
    {
      $sort: { createdAt: -1 }
    },
    {
      $skip: _skip 
    },
    {
      $limit: _limit 
    },
  ])
  
  if(!post)
    {
      res.status(401).json({
        message: 'Post not found'
      })
      return
    }

  res.locals.comment = comment
  res.locals.size = size

  next()
  return
}

export default getComment
