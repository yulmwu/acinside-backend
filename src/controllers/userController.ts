import { Request, Response } from 'express'
import { User } from '../types/user'
import { users } from '../data/userData'

/**
 * @description Get all users
 * @route GET /users
 * @param _req
 * @param res
 */
export const getAllUsers = (_req: Request, res: Response) => {
    res.json(users)
}

export const getUserById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const user = users.find((u) => u.id === id)

    if (user) {
        res.json(user)
    } else {
        res.status(404).json({ error: 'User not found' })
    }
}
