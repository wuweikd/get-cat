const jwt = require('jsonwebtoken')

const secret = 'wuwei'
const expiresIn =  365 * 86400 // 过期时间（s）

exports.sign = (user) => {
    const token = jwt.sign({
        email : user.email,
        userId: user._id
    }, secret, {expiresIn})
    return token
}

exports.verify = (token) => {}
