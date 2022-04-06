

import { Request,Response } from 'express'

export default {
  register: ((req: Request, res: Response) => {
    res.status(200).json({
      message: 'register'
    })
    return
  }),
  login: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        user: res.locals.user,
        token: res.locals.token
      }
    })
    res.locals.user = undefined
    res.locals.token = undefined
    return
  }),
  logout: ((req: Request, res: Response) => {
    res.status(200).json({
      message: 'Logout'
    })
    return
  }),
  auth: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        user: res.locals.user
      }
    })
    res.locals.user = undefined
    return 
  }),
  search: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        user: res.locals.user 
      }
    })
    res.locals.user = undefined
    return
  })
}
