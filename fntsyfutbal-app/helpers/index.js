module.exports = (req, res, next) => {
    const jwt = require('jsonwebtoken')
    const TOKEN_KEY = 'fantasykey'
    try {
        const token = req.headers.athorization.split('')[1]
        const data = jwt.verify(tojen, TOKEN_KEY)
        next
    } catch (error) {
        console.log(error)
        res.status(403).send('Unauthorized')
    }
}