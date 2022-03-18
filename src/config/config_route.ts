import { NextFunction, Request, Response } from "express"
import userRoute from '../route/user'

module.exports = ( app: any ) => {
  app.use('/api', userRoute)   
  app.use((req: Request, res: Response) => {
    res.status(404).json({
      message: 'Not Found'
    })
  })
  return
}
