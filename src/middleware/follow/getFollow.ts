
import Follow from '../../model/Follow'   
import { Response,Request,NextFunction } from 'express'

const getFollow = async (req: Request, res: Response, next: NextFunction) => {
  
  const { userUid } = req.body
  
  const result = await Follow.aggregate([
    { 
      $match: { followUid: userUid }
    },
    {
      $project: {userUid: "$userUid"}
    },
    {
      $lookup: {
        from: 'users',
        localField: 'userUid',
        foreignField: 'uid',
        as: 'users'
      }
    },
    {
      $project: {
        user: ["$users"],
      }
    },
    {
      $unwind: '$user'
    },
    {
      $project: {
        user: {
          firstName: 1,
          lastName: 1,
          _id: 1,
          uid: 1,
          avatar: 1
        }
      }
    }
  ])
  res.locals.follow = result
  res.locals.count = result.length

  next()
  return
}

export default getFollow
