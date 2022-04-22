
import { Request,Response } from 'express'

export default {
  create: ((req: Request, res: Response) => {
    res.status(200).json({
      message: 'create'
    })
    res.locals.user = undefined
    return
  }),
  delete: ((req: Request, res: Response) => {
    res.status(200).json({
      message: 'delete'
    })
    return
  }),
  getComment: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        comment: res.locals.comment,
        size: res.locals.size
      }
    })
    res.locals.comment = undefined
    res.locals.size = undefined
    return
  })
}
