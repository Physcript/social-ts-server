


import express from 'express'
import controller from '../controller/like'
import likeComment_middleware from '../middleware/like/likeComment'
const router = express.Router()

router.post('/like/comment', likeComment_middleware, controller.likeComment)
router.post('/like/profile', controller.likeProfile)

export default router
