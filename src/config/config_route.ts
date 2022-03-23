import { NextFunction, Request, Response } from "express"
import userRoute from '../route/user'
import postRoute from '../route/post'

module.exports = ( app: any ) => {
  app.use('/api', userRoute)   
  app.use('/api', postRoute)
 
  app.use((req: Request, res: Response) => {
    res.status(404).json({
      message: 'Not Found'
    })
  })

  return
}
