
const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const restrict = require('../helpers')

router.get('/', (req,res)=> res.send('This is the main page'))

//creates account with the information in CreateAccForm
router.post('/sign-up', controllers.join) // (works good)

//Logs in account
router.post('/sign-in', controllers.logIn)  // (works good)

//get all users/rosters/players
router.get('/users', controllers.getAllUsers) // (works good)

router.get('/rosters', controllers.getAllRosters)  // (works good)

// router.get('/players', controllers.getAllPlayers)

//get roster/player by ID
router.get('/rosters/:id', controllers.getRosterById) // (works good)
// router.get('/players/:id', controllers.getPlayerById)

//create roster/player
router.post('/rosters', controllers.createRoster)  // (works good) (works without restrict only)
// router.post('/players', restrict, controllers.createPlayer)

//edit roster/player
router.put('/rosters/:id', controllers.updateRoster)
// router.put('/players/:id', restrict, controllers.updatePlayer)

//delete roster/player
router.delete('/rosters/:id', controllers.deleteRoster) // (works good) (works without restrict only)
// router.delete('/players/:id', restrict, controllers.deletePlayer)

module.exports = router