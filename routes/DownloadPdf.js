const express = require('express')
const router = express.Router()


router.post('/', (req, res) => {
    res.json('Download PDF')
})


module.exports = router