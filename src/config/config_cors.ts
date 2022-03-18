
import { Express, NextFunction, Request, Response } from 'express'

module.exports = ( app: Express ) => {
  
  app.use((req: Request, res: Response, next: NextFunction) => {  
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,PUT,DELETE,OPTIONS') 
    res.setHeader('Access-Control-Allow-headers', 'X-Requested-With,Content-Type,token')
    res.setHeader('Access-Control-Allow-credentials', 'true')
    next()
  })
  
  return
}
