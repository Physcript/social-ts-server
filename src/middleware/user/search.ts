

import { Request,Response,NextFunction } from 'express'
import { find_by_uid } from '../main' 
import { DUser,IUser } from '../../interface/user'
import { find_follow_by_followerUid } from '../main'

const search = async (req: Request, res: Response, next: NextFunction) => {
  const { uid } = req.body

  const user: IUser = await find_by_uid(uid) ?? DUser
  const followers = await find_follow_by_followerUid(uid)

  user.password = ''
  user.token = ''

  res.locals.user = user
  res.locals.count = followers.length

  next()
  return 
}

export default search 
