
const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const restrict = require('../helpers')

router.get('/', (req,res)=> res.send('This is the main page'))

//creates account with the information in CreateAccForm
router.post('/sign-up', controllers.join)

//Logs in account
router.post('/sign-in', controllers.logIn)

//get all users/rosters/players
router.get('/users', controllers.getAllUsers)

router.get('/rosters', controllers.getAllRosters)

router.get('/players', controllers.getAllPlayers)

//get roster/player by ID
router.get('/rosters/:id', controllers.getRosterById)
router.get('/players/:id', controllers.getPlayerById)

//create roster/player
router.post('/rosters', restrict, controllers.createRoster)
// router.post('/players', restrict, controllers.createPlayer)

//edit roster/player
router.put('/rosters/:id', restrict, controllers.updateRoster)
// router.put('/players/:id', restrict, controllers.updatePlayer)

//delete roster/player
router.delete('/rosters/:id', controllers.deleteRoster)
// router.delete('/players/:id', restrict, controllers.deletePlayer)





module.exports = router