const express = require('express')
const router = express.Router()
const cors = require('cors')
router.use(cors())
const fs = require('fs')

const jsonString = fs.readFileSync("./database.json")
console.log(jsonString)
const dbData = JSON.parse(jsonString)

router.post('/', async (req, res) => {
})

router.get('/', async (req, res) => {
    res.send(dbData.Standorte)
})

module.exports = router