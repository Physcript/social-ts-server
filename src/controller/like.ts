import { Request,Response } from "express";


export default {
  likeComment: ((req: Request, res: Response) => {
    res.status(200).json({
      message: 'You like something'
    })
    return
  }),
  likeProfile: ((req: Request, res: Response) => {
    res.status(200).json({
      message: 'You like profile'
    })
  })
}
