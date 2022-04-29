


import express from 'express'
import controller from '../controller/follow'
import f_create_middleware from '../middleware/follow/create'
import f_get_middleware from '../middleware/follow/getFollow'
import authenticate from '../middleware/auth'
import f_check_middleware from '../middleware/follow/check'

const router = express.Router()

router.post('/f/create',authenticate,f_create_middleware,controller.create)
router.post('/f/get',f_get_middleware,controller.get)
router.post('/f/check',authenticate,f_check_middleware,controller.check)

export default router
