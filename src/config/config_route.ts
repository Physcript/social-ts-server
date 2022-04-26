import { NextFunction, Request, Response } from "express"
import userRoute from '../route/user'
import postRoute from '../route/post'
import likeRoute from '../route/like'
import commentRoute from '../route/comment'
import followRoute from '../route/follow'

module.exports = ( app: any ) => {
  app.use('/api', userRoute)   
  app.use('/api', postRoute)
  app.use('/api', likeRoute)
  app.use('/api', commentRoute)
  app.use('/api', followRoute)

  app.use((req: Request, res: Response) => {
    res.status(404).json({
      message: 'Not Found'
    })
  })

  return
}
