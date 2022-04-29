import { NextFunction, Request, Response } from "express";
import Follow from "../../model/Follow";
import { find_by_uid } from "../main";
import { find_follow_by_uid } from "../main";

const create = async (req: Request,res: Response, next: NextFunction) => {
  const { followUid } = req.body
  const meUser = res.locals.user
  const userUid  = meUser.uid ?? null
  const toFollowUser = await find_by_uid(followUid)
  
  if(meUser === null || toFollowUser === null)
    {
      res.status(400).json({
        message: 'Unknown error'
      })
      return
    }
  
  const follow = new Follow({
    userUid,
    followUid
  })

  const exist = await find_follow_by_uid(userUid,followUid)
  console.log(exist)
  if(exist)
    {
      await Follow.findOneAndDelete({userUid,followUid})
    }
  else
    {
      follow.save() 
    }
  
  next()
  return
}

export default create
