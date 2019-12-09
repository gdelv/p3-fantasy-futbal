const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

const SALT_ROUNDS = 11
const TOKEN_KEY = 'fantasykey'


//Login Controller (Sign In)
const logIn = async (req,res) => {


    try {
            console.log(req.body)
            const { username, password } = req.body
            const user = await User.findOne({
                where: {
                    username
                }
            })
            if(await bcrypt.compare(password, user.dataValues.password_digest)) {
                const payload = {
                    id:user.id,
                    username: user.username,
                    password: user.password
                }
                const token = jwt.sign(payload, TOKEN_KEY)
                return res.status(201).json({ user, token })
            } else {
                res.status(401).send('Invalid Login')
            }

    } catch(error) {
        return res.status(500).json({ error:error.message })
    }
}

//Join Controller (Sign Up)

const join = async(req,res) => {
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
        return res.status(400).json({ error:error.message })
    }
}

module.exports = {
    join, 
    logIn
}