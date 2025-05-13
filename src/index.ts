import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Test')
})

app.get('/api/:id', (req, res) => {
    const id = req.params.id
    res.send(`Hello ${id}`)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
