import setting from '../config'
import jwt from 'jsonwebtoken'
import { _IUser } from "../interface/user";

const generate_token = async (user: _IUser) => {
  return await jwt.sign(user,`${setting.TOKEN.LOGIN}`) 
}

export default generate_token
