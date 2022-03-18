import bcrypt from 'bcrypt'
import validator from 'validator'
import User from '../../model/User'

import { Request,Response,NextFunction } from "express";
import { IEUser, IUser } from "../../interface/user";
import { find_by_email } from '../main';
import generate_avatar from '../../module/generate_avatar';
import generate_uid from '../../module/generate_uid';
import generate_password from '../../module/generate_password';


const register = async (req: Request, res: Response, next: NextFunction) => {

  const { firstName,
          lastName,
          address,
          email,
          password,
          confirmPassword
        } = req.body 

  const error_01 = check_valid_input(req) 
  const error_02 = check_valid_password(password,confirmPassword)
  const error_03 = await check_valid_email(email)
  
  const error = {
    ...error_01,
    ...error_02,
    ...error_03
  }
  
  if(Object.keys(error).length >= 1)
    {
      res.status(400).json({
        error
      })
      return
    }
  
  // generate
  const avatar = generate_avatar()
  const uid = generate_uid()
  const encrypt = await generate_password(password)
  
  // making model
  const user = new User({
    firstName,
    lastName,
    address,
    email,
    password: encrypt,
    avatar,
    uid,
  })
  
  await user.save() 
  next()
}

const check_valid_input = ( req: Request ) => {

  const err: any = {  }

  const { firstName,
          lastName,
          address,
          email,
          password,
          confirmPassword
        } = req.body  

  const data: IEUser = {
    Firstname: firstName,
    Lastname: lastName,
    Address: address,
    Email: email,
    Password: password,
    ConfirmPassword: confirmPassword
  }
  
  Object.entries(data).forEach(([key,value]) => {
    if(value.trim() === '')
      {
        err[key] = `Require ${ key }`
      }
  })

  return err

}

const check_valid_email = async (email: string) => {
  const error: any = {} 
  const user: IUser = await find_by_email(email)

  if(!validator.isEmail(email))
    {
      error['Email'] = 'Invalid email'     
      return error
    }

  if(user)
    {
      error['Email'] = 'Email already exists'
      return error
    }

  return error
}

const check_valid_password = (password: string, confirmPassword: string) => {
  const error: any = {}

  if(password.includes(' '))
    {
      error['Password'] = 'Invalid password'
      return error
    }
  if(password.length <= 5)
    {
      error['Password'] = 'Password minimun of 6 characters'
      return error
    }
  if(password.trim() !== confirmPassword)
    {
      error['Password'] = 'Password not match'
      return error
    }

  return error
}

export default register
