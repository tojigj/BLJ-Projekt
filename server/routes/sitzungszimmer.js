const express = require('express')
const router = express.Router()
const cors = require('cors')
router.use(cors())
const fs = require('fs')

const jsonString = fs.readFileSync("./database.json")
const dbData = JSON.parse(jsonString)

router.post('/', async (req, res) => {
})

<<<<<<< HEAD

=======
>>>>>>> 2371c0a97e0c4fbd19ea8e55716a9902e8b32050
router.get('/', async (req, res) => {
    res.send(dbData.Sitzungszimmer)
})

<<<<<<< HEAD
module.exports = router
=======
module.exports = router
>>>>>>> 2371c0a97e0c4fbd19ea8e55716a9902e8b32050
