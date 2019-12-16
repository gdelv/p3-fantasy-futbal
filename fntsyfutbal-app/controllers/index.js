const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Roster, Player} = require('../models')

const SALT_ROUNDS = 11
const TOKEN_KEY = 'fantasykey'


//Join Controller (Sign Up)  (works good)

const join = async (req, res) => {
    try {
        console.log(req.body)
        const { username, password, email, firstName, lastName, imgUrl } = req.body
        const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
        const user = await User.create({
            username,
            email,
            firstName,
            lastName,
            imgUrl,
            password_digest
        })
        console.log(user)
        const payload = {
            id: user.id,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            imgUrl: user.imgUrl
        }

        const token = jwt.sign(payload, TOKEN_KEY)
        return res.status(201).json({ user, token })
    } catch (error) {
        console.log('Oops! Something went wrong')
        return res.status(400).json({ error: error.message })
    }
}

//Login Controller (Sign In)  (works good)
const logIn = async (req,res) => {
    try {
            console.log(req.body)
            const { username, password } = req.body
            const user = await User.findOne({
                where: {
                    username
                }
            })
            console.log(user.dataValues)
            if(await bcrypt.compare(password, user.dataValues.password_digest)) {
                const payload = {
                    id:user.id,
                    username: user.username,
                    email: user.email
                }
                const token = jwt.sign(payload, TOKEN_KEY)
                return res.status(201).json({ user, token })
            }
             else {
                res.status(401).send('Invalid Login')
            }

    } catch(error) {
        return res.status(500).json({ error:error.message })
    }
}

const createRoster = async (req, res) => {   //(works good)
    try {
        console.log('this is req.body', req.body)
        const createdRoster = await Roster.create(req.body)

        return res.status(201).json({
            roster: {
                createdRoster
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}


const getAllUsers = async (req,res) => {  //(works good)
    try {
        const users = await User.findAll();
        return res.status(200).json({ users })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAllRosters = async (req, res) => {  //(works good)
    console.log('here')
    try {
        const rosters = await Roster.findAll();
        return res.status(200).json({ rosters })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// const getAllPlayers = async (req,res) => {
//     console.log('here')

//     try {
//         const players = await Player.findAll();
//         return res.status(200).json({ players })
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }

// const getAllPlayers = async(req,res)=>{
//     const players = await Player.findAll()
//     res.send(players)
// }

// const getPlayersRosters = async (req, res) => {  //(works good)
//     console.log('inside contoller')
//     try {
//         const player = await players.findAll( {
//             where: {
//                 id: req.params.id
//             },
//             include: [{
//                 model: Roster,
//             }]
//         });
//         return res.status(200).json({ player })
//     }
//     catch (error) {
//         return res.status(500).send(error.message)
//     }
// }

const getRosterById = async (req, res) => {  //// works good
    try {
        const { id } = req.params
        const roster = await Roster.findOne({
            where: { id: id }
        })
        if (roster) {
            return res.status(200).json({ roster })
        }
        return res.status(404).send('Roster with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// const getPlayerById = async (req, res) => {
//     try {
//         const { id } = req.params
//         const player = await Player.findOne({
//             where: { id: id }
//         })
//         if (player) {
//             return res.status(200).json({ player })
//         }
//         return res.status(404).send('Player with the specified ID does not exist')
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }






const updateRoster = async (req, res) => {
    try {
        const { id } = req.params
        console.log(req)

        console.log(req.body)
        console.log('here')

        // const { roster } = req.body
        const [updated] = await Roster.update(req.body, {
            where: { id: id }
        })
        if (updated) {
            const updatedRoster = await Roster.findOne({ where: { id: id } })
            return res.status(202).json({ roster: updatedRoster })
        }
        throw new Error('Roster not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteRoster = async (req, res) => {
    console.log('here')
    try {
        const { id } = req.params
        const deleted = await Roster.destroy({
            where: { id: id }
        })
        // .then(()=>{
        //     getAllRosters()
        // })
        if (deleted) {
            return res.status(202).send('Item deleted')
        }
        throw new Error('Roster not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// const createPlayer = async (req, res) => {
//     try {
//         const player = await Player.create(req.body)
//         return res.status(201).json({
//             player
//         })
//     } catch (error) {
//     return res.status(500).json({error: error.message})
//     }
// }

// const updatePlayer = async (req, res) => {
//     try {
//         const {id} = req.params
//         const [updated] = await Player.Update(req.body, {
//             Where: { id: id }
//         })
//        if (update) {
//            const updatePlayer = await Player.findAll({where: {id:id}})
//            return res.status(200).json({player: updatePlayer})
//        }
//     } catch (error) {
//        return res.status(500).send(error.message)
//         }
//     }

    // const deletePlayer = async (req, res) => {
    //  try {
    //      const {id} = req.params
    //      const deleted = await Player.destroy({
    //          where: {id: id}
    //      })
    //      if (deleted) {
    //         return res.status(200).send('Player deleted')
    //      }
    //  } catch (error) {
    //      return res.status(500).send(error.message)
    //  }
    // }



module.exports = {
    join, //works
    logIn, //works
    getAllUsers, //works
    getAllRosters, //works
    getRosterById, //works
    createRoster,//works 
    deleteRoster,//works
    
    updateRoster //does not work
    
    // getAllPlayers, //does not work
    // getPlayerById //does not work
    // getPlayersRosters, //does not work
    // createPlayer, //does not work
    // updatePlayer, //does not work
    // deletePlayer //does not work
}