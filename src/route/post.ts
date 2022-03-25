


import express from 'express'
import create_middleware from '../middleware/post/create'
import controller from '../controller/post'
import authenticate from '../middleware/auth'
import findAll_middleware from '../middleware/post/findAll'
import findAllById_middleware from '../middleware/post/findById'

const router = express.Router()


router.post('/create',authenticate,create_middleware,controller.create)
router.get('/post',authenticate,findAll_middleware,controller.findAll)
router.get('/postById',authenticate,findAllById_middleware,controller.findById)

export default router
