const express = require('express')
const router = express.Router()
const cors = require('cors')
router.use(cors())
const fs = require('fs')

const jsonString = fs.readFileSync("./database.json")
const dbData = JSON.parse(jsonString)

router.post('/', async (req, res) => {
})


router.get('/', async (req, res) => {
    res.send(dbData.Sitzungszimmer)
})

module.exports = router
