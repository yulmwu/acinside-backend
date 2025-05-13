import express from 'express'
import apiRouter from './routes/apiRoutes'
import connectDB from './config/dbConnect'

const app = express()
const port = 3000

connectDB()

app.use('/api', apiRouter)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
