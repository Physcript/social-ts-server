import { Request,Response,NextFunction } from "express";
import { find_follow_by_both } from "../main";

const check = async (req: Request, res: Response, next: NextFunction) => {
  console.log('starting check middleware') 
  const { followUid } = req.body 
  const { uid } = res.locals.user?? null  
  

  
  if ( followUid === uid )
    {
      res.status(400).json({
        message: true
      })
      return 
    }
  const isExist = await find_follow_by_both(uid, followUid)
  
  res.locals.isExist = isExist
  
  next()
  return
}

export default check
