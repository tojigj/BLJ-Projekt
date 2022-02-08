import PrismaClient from '@prisma/client'

const prisma = new PrismaClient()
const express = require('express')

const app = express()

app.post('/', (req, res) => {
    const { standortName } = await prisma.standorte.create({
        data:{
            standortName: Fluhmatt
        }
    })
})

app.listen(5000, () => {
    if(err){
        console.log('Error in server Setup')
    }
})