import express from 'express'
import controller from '../controller/comment'
import createMiddleware from '../middleware/comment/create'
import authenticate from '../middleware/auth'
import getComment from '../middleware/comment/getComment'
const router = express.Router()

router.post('/c/create',authenticate,createMiddleware,controller.create)
router.post('/c/get', authenticate,getComment,controller.getComment)

export default router
