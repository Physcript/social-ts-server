
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { Request,Response,NextFunction } from 'express'
import { find_by_email } from '../main'
import { _IUser } from '../../interface/user'
import generate_token from '../../module/generate_token'



const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email,password } = req.body

  const user = await find_by_email(email)
  if(!user)
    {
      res.status(400).json({
        error: 'Incorrect email/password'
      })
      return
    }
  
  if(await !check_password_match(password,user.password))
    {
      res.status(400).json({
        error: 'Incorrect email/password'
      })
      return
    }

  // generate token
    
  const USER: _IUser = {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    address: user.address,
    email: user.email,
    uid: user.uid,
    avatar: user.avatar,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  }
  
  const token = await generate_token(USER)
  user.token = token
  await user.save()
  
  res.locals.user = USER 
  res.locals.token = token

  next()

  return
}

const check_password_match = async (password: string, userPassword: string) => {
  return await bcrypt.compare(password,userPassword)
}
export default login
