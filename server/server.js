const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

//Router
const soRouter = require('./routes/standorte')
app.use('/standorte', soRouter)
const swRouter = require('./routes/stockwerke')
app.use('/stockwerke', swRouter)

app.post('/', async (res, req) => {
})

app.get('/', async (req, res) => {
})


const port = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Listening on port ${port}...`));


