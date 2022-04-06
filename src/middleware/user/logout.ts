import { Request,Response,NextFunction } from "express";
import { find_by_uid } from "../main";



const logout = async (req: Request, res: Response, next: NextFunction) => {
  const { uid } = req.body

  const user = await find_by_uid(uid)

  if(!user) 
    {
      res.status(401).json({
        error: 'Something went wrong try again later'
      })
      return
    }

  user.token = ''
  await user.save()
  
  next()
  return
}

export default logout
