import { PrismaClient } from '@prisma/client'
const express = require('express')
const prisma = new PrismaClient()
const app = express()


app.post('/', async (req, res) => {
    const { stockwerke_name, stockwerke_nr}
    const stockwerk = await prisma.stockwerke.create({
        data: {
            stockwerke_name = Erster,
            stockwerke_nr = 1
        }
    })
}) 

app.get('/', (req, res) => {
    const stockwerke = await prisma.stockwerke.findMany()
}) 

app.put('/', (req, res) => {
    
}) 

app.delete('/', (req, res) => {
    
}) 

const port = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Listening on port ${port}...`));


/*
async function main(){
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}
*/
