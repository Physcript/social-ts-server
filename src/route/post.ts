


import express from 'express'
import create_middleware from '../middleware/post/create'
import controller from '../controller/post'
import authenticate from '../middleware/auth'
const router = express.Router()


router.post('/create',authenticate,create_middleware,controller.create)



export default router
