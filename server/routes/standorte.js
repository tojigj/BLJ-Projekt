const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const cors = require('cors')
router.use(cors())

router.post('/', async (req, res) => {
})

router.get('/', async (req, res) => {
    const standOrte = await prisma.standorte.findMany({
    })
    res.send(standOrte)
})

module.exports = router