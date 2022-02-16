const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

//Router
const soRouter = require('./routes/standorte')
app.use('/standorte', soRouter)
<<<<<<< HEAD
=======
const swRouter = require('./routes/stockwerke')
app.use('/stockwerke', swRouter)
>>>>>>> 2371c0a97e0c4fbd19ea8e55716a9902e8b32050
const szRouter = require('./routes/sitzungszimmer')
app.use('/sitzungszimmer', szRouter)

app.post('/', async (res, req) => {
})

app.get('/', async (req, res) => {
})


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));


