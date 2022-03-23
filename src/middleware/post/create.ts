import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { _IUser } from "../../interface/user";

import Post from '../../model/Post'


const create = async (req: Request, res: Response, next: NextFunction) => {
  const { uid,body } = req.body
  const user: _IUser = await res.locals.user
  if( check_empty_body(body) )
    {
      res.status(400).json({
        error: 'Empty description'
      })
      return
    }

  if( check_uid(uid,user.uid) )
    {
      res.status(400).json({
        error: 'Unauthorized'
      })
      return
    }

  const post = new Post({
    firstName: user.firstName,
    lastName: user.lastName,
    body,
    userUid: uid
  })
  
  await post.save()
  
  res.locals.post = post

  next()
  return
}


const check_empty_body = (body: string): boolean => {
  if(body.trim() === '')
    {
      return true
    }
  return false
}

const check_uid = (uid: string, userUid: string) => {
  if(uid !== userUid) 
    {
      return true
    }
  return false
}

export default create
