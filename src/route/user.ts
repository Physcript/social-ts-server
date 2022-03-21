
import express from 'express'
import controller from '../controller/user'
import register_middleware from '../middleware/user/register'
import login_middleware from '../middleware/user/login'
import logout_middleware from '../middleware/user/logout'
import auth_middleware from '../middleware/auth'

const router = express.Router()

router.post('/register',register_middleware,controller.register)
router.post('/login',login_middleware,controller.login)
router.post('/logout',logout_middleware,controller.logout)
router.post('/auth',auth_middleware,controller.auth)

export default router
