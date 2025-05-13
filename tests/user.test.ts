jest.mock('../src/data/userData', () => ({
    users: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
    ],
}))

import request from 'supertest'
import app from '../src/app'

describe('User Routes', () => {
    it('GET /users → should return all users', async () => {
        const res = await request(app).get('/users')
        expect(res.statusCode).toBe(200)
        expect(res.body.length).toBeGreaterThan(0)
    })

    it('GET /users/1 → should return user with id 1', async () => {
        const res = await request(app).get('/users/1')
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty('name', 'Alice')
    })

    it('GET /users/999 → should return 404 for unknown user', async () => {
        const res = await request(app).get('/users/999')
        expect(res.statusCode).toBe(404)
        expect(res.body).toHaveProperty('error', 'User not found')
    })
})
