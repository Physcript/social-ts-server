import { Request,Response } from "express";


export default {
  likeComment: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        count: res.locals.count,
        data: res.locals.data
      } 
    })
    res.locals.count = undefined
    return
  }),
  likeProfile: ((req: Request, res: Response) => {
    res.status(200).json({
      message: 'You like profile'
    })
  })
}
