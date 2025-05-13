import { Request, Response } from 'express'

/**
 * @desc Get all users
 * @route GET /api/users
 * @method GET
 */
const getAllUsers = async (req: Request, res: Response) => {
    res.send('All users')
}

/**
 * @desc Get user by ID
 * @route GET /api/users/:id
 * @method GET
 */
const getUserById = async (req: Request, res: Response) => {
    res.send('Get user by ID')
}

/**
 * @desc Create a new user
 * @route POST /api/users
 * @method POST
 */
const createUser = async (req: Request, res: Response) => {
    res.send('Create user')
}

/**
 * @desc Delete a user
 * @route DELETE /api/users/:id
 * @method DELETE
 *
 */
const deleteUserById = async (req: Request, res: Response) => {
    res.send('Delete user')
}

export { getAllUsers, getUserById, createUser, deleteUserById }
