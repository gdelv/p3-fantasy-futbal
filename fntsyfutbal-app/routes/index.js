const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
// const restrict = require('../helpers')

router.get('/', (req,res)=> res.send('This is the main page'))

module.exports = router