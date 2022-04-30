import { Request,Response } from "express";



export default {
  create: ((req: Request, res: Response) => {
    res.status(200).json({
      message: res.locals.exist,
      count: res.locals.count
    })
    res.locals.exist = undefined
    res.locals.count = undefined

    return
  }),
  get: ((req: Request, res: Response) => {
    
    res.status(200).json({
      message: {
        follower: res.locals.follow,
        count: res.locals.count
      }
    })
    res.locals.follow = undefined
    res.locals.count = undefined
    return
  }),
  check: ((req: Request, res: Response) => {
    res.status(200).json({
      message: res.locals.isExist
    })
  
    res.locals.isExist = undefined
    return
  })
}
