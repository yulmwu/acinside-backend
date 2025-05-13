import { Router } from 'express'
import { getAllUsers, getUserById, createUser, deleteUserById } from '../controllers/user'

const router = Router()

router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(getUserById).delete(deleteUserById)

export default router
