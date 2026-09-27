import { Router } from 'express'
import { getProfile, updateProfile, uploadAvatar } from '../controllers/profile.controller'

const router = Router()

router.get('/', getProfile)
router.put('/', updateProfile)
router.post('/avatar', uploadAvatar)

export default router
