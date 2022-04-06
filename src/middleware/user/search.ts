

import { Request,Response,NextFunction } from 'express'
import { find_by_uid } from '../main' 
import { DUser,IUser } from '../../interface/user'

const search = async (req: Request, res: Response, next: NextFunction) => {
  const { uid } = req.body
  const user: IUser = await find_by_uid(uid) ?? DUser
  user.password = ''
  user.token = ''

  res.locals.user = user
  console.log(user)
  next()
  return 
}

export default search 
