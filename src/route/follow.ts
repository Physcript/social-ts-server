


import express from 'express'
import controller from '../controller/follow'
import f_create_middleware from '../middleware/follow/create'

const router = express.Router()


router.post('/f/create',f_create_middleware,controller.create)

export default router
