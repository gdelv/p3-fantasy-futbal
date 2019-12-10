const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const restrict = require('../helpers')

router.get('/', (req,res)=> res.send('This is the main page'))

router.post('/join', controllers.join)
router.post('/login', controllers.logIn)


router.get('/users', controllers.getAllUsers)
router.get('/rosters', controllers.getAllRosters)
router.get('/rosters/:id', controllers.getRosterById)

router.post('/rosters', restrict, controllers.createRoster)

router.put('/rosters/:id',restrict, controllers.updateRoster)

router.delete('/rosters/:id', restrict, controllers.deleteRoster)



module.exports = router