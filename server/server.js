import { PrismaClient } from '@prisma/client'
import { json } from 'express'
const prisma = new PrismaClient()

const express = require('express')
const app = express()




app.post('/', async (req, res) => {
  const { standortName } = req.body
  const stName = await prisma.standorte.create({
    data:{
      standorName: 'Fluhmatt'
    }
  })
  res,json(stName)
}) 

app.get('/', (req, res) => {
 
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
