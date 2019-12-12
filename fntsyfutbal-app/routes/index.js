
const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
// const restrict = require('../helpers')

router.get('/', (req,res)=> res.send('This is the main page'))

//creates account with the information in CreateAccForm
router.post('/sign-up', controllers.join)

//Logs in account
router.post('/sign-in', controllers.logIn)


router.get('/users', controllers.getAllUsers)
// router.get('/rosters', controllers.getAllRosters)
// router.get('/rosters/:id', controllers.getRosterById)

// router.post('/rosters', controllers.createRoster)

// router.put('/rosters/:id', controllers.updateRoster)

// router.delete('/rosters/:id', controllers.deleteRoster)

router.get('/players', controllers.getAllPlayers)


module.exports = router