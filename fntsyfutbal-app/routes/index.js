const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const restrict = require('../helpers')

router.get('/', (req,res)=> res.send('This is the main page'))

//creates account with the information in CreateAccForm
router.post('/sign-up', controllers.join)

//Logs in account
router.post('/sign-in', controllers.logIn)


// router.get('/users', controllers.getAllUsers)
// router.get('/rosters', controllers.getAllRosters)
// router.get('/rosters/:id', controllers.getRosterById)

<<<<<<< HEAD
router.post('/rosters', restrict, controllers.createRoster)

router.put('/rosters/:id',restrict, controllers.updateRoster)

router.delete('/rosters/:id', restrict, controllers.deleteRoster)
=======
// router.post('/rosters', controllers.createRoster)

// router.put('/rosters/:id', controllers.updateRoster)

// router.delete('/rosters/:id', controllers.deleteRoster)
>>>>>>> 95fece69c2046aa80d4203d7a140c3c7789eb1f3

router.get('/players', controllers.getAllPlayers)


module.exports = router