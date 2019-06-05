const jwt = require('jsonwebtoken')
const globalConfig = require('../public/javascripts/config/global.config')
const { secret, expiresIn } = globalConfig.jwt
exports.sign = (user) => {
    const token = jwt.sign({
        email : user.email,
        userId: user._id
    }, secret, {expiresIn})
    return token
}

exports.verify = (token) => {
    const decoded = jwt.verify(token, secret)
    return decoded
}
