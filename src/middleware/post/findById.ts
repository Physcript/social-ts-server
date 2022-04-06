import { NextFunction, Request, Response } from "express"
import { find_post_by_id } from "../main"



const findById = async (req: Request, res: Response, next: NextFunction) => {
  const { uid } = req.body
  const post = await find_post_by_id(uid) ?? []
  res.locals.post = post
  next()
  return
}

export default findById
