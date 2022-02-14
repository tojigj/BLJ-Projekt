const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

//Router
const szRouter = require('./routes/sitzungszimmer')
app.use('/sitzungszimmer', szRouter)

app.post('/', async (res, req) => {
})

app.get('/', async (req, res) => {
 
})


const port = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Listening on port ${port}...`));


/*
async function main(){
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}
*/

/*    const { standortName, standortID } = req.body
    const standOrte = await prisma.standorte.create({
        data: {
            standortName: 'Fluhmatt',
            standortID: 1,
        },
    })
    res.json(standOrte)
    console.log(standOrte) */