import express from 'express'
import userRoutes from './routes/userRoutes'

const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
    res.send('Welcome to the Express + TypeScript API!')
})

app.use('/users', userRoutes)

export default app
