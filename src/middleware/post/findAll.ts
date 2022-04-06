import { NextFunction, Request, Response } from "express"
import { IPost } from "../../interface/post"
import { find_all_post } from '../main'



const findAll = async (req: Request, res: Response, next:NextFunction ) => {
  const post: IPost[] = await find_all_post() ?? []
  res.locals.post = post.reverse() 
  next()
  return
}

export default findAll
