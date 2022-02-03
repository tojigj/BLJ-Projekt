import { PrismaClient } from '@prisma/client'

const express = require('express')
const prisma = new PrismaClient()
const app = express()




app.post('/', async (req, res) => {

    
    
}) 

app.get('/', (req, res) => {
    res.json({"users": ["userOne", "Usertwo"]})
}) 

app.put('/', (req, res) => {
    
}) 

app.delete('/', (req, res) => {
    
}) 

app.listen(5000, () =>{
    console.log('Running on Server')
})


/*
async function main(){
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}
*/
