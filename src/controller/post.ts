
import { Response,Request } from 'express'

export default {
  create: ((req: Request, res: Response) => {
    res.status(200).json({
      message:
        {
          post: res.locals.post
        }
    })
    res.locals.user = undefined
    res.locals.post = undefined
    return
  }),
  findAll: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        post: res.locals.post
      }
    })
    res.locals.post = undefined
    return
  }),
  findById: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        post: res.locals.post
      }
    })
    res.locals.post = undefined
    return
  })

}
