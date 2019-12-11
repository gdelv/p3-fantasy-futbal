const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const restrict = require('../helpers')

router.get('/', (req,res)=> res.send('This is the main page'))

//creates account with the information in CreateAccForm
router.post('/users', controllers.join)

//Logs in account
router.post('/users', controllers.logIn)


router.get('/users', controllers.getAllUsers)
router.get('/rosters', controllers.getAllRosters)
router.get('/rosters/:id', controllers.getRosterById)
router.get('/players/:id/roster', controllers.getPlayersRosters)

router.post('/rosters', restrict, controllers.createRoster)

router.put('/rosters/:id',restrict, controllers.updateRoster)

router.delete('/rosters/:id', restrict, controllers.deleteRoster)

router.get('/players', controllers.getAllPlayers)


module.exports = router