const { PrismaClient } = require('@prisma/client')

const express = require('express')
const { default: newStandorte } = require('./standorte')
const prisma = new PrismaClient()
const app = express()
app.use(express.json())

app.post('/', async (res, req) => {

    
})

app.get('/', async (req, res) => {
    const standOrte = await prisma.standorte.findMany({
    })
    res.send(standOrte)
    console.log(standOrte)
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