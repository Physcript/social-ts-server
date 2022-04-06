
import express from 'express'
import controller from '../controller/user'
import register_middleware from '../middleware/user/register'
import login_middleware from '../middleware/user/login'
import logout_middleware from '../middleware/user/logout'
import search_middleware from '../middleware/user/search'
import authenticate from '../middleware/auth'
const router = express.Router()

router.post('/register',register_middleware,controller.register)
router.post('/login',login_middleware,controller.login)
router.post('/logout',logout_middleware,controller.logout)
router.post('/auth',authenticate,controller.auth)
router.post('/search',search_middleware,controller.search)

export default router
