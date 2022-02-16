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
const szRouter = require('./routes/sitzungszimmer')
app.use('/sitzungszimmer', szRouter)

app.post('/', async (res, req) => {
})

app.get('/', async (req, res) => {
})


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));


