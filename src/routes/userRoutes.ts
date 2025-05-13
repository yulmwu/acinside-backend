import { Router } from 'express'
import { getAllUsers, getUserById } from '../controllers/userController'

const router = Router()

router.get('/', getAllUsers)
router.get('/get/:id', getUserById)

export default router
