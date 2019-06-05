/* 用于校验token */

const token = require('../utils/token.util')

exports.auth = (name) => (req, res, next) => {
    const t = req.headers.token || req.get(name)
    if (!t) {
        res.json({
            success: false,
            message: '请登录后再试'
        })
        return
    }
    try {
        const userInfo = token.verify(t)
        res.locals.user = userInfo || {}
        next()
    } catch (e) {
        res.clearCookie(name)
        res.json({
            success: false,
            message: 'token 无效',
            error
        })
    }
}
