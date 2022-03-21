import { Request,Response,NextFunction } from "express";
import { IUser, _IUser } from "../interface/user";
import { find_by_token } from "./main";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers  
  const user: IUser = await find_by_token(`${token}`)

  if(!user || user === null)
    {
      res.status(401).json({
        error: 'No token'
      })
      return
    }
  
  const _user: _IUser = {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    address: user.address,
    avatar: user.avatar,
    uid: user.uid,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }

  res.locals.user = _user
  next()
}


export default auth
