const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const cors = require('cors')
router.use(cors())

router.post('/', async (req, res) => {
})


router.get('/', async (req, res) => {
    const stockWerke = await prisma.stockwerke.findMany({
    })
    res.send(stockWerke)
})

module.exports = router