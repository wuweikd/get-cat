'use strict'

const mongoose = require('mongoose')
const User = mongoose.model('User')

/* 登录 */
exports.login = async (req, res, next) => {
    const { body } = req
    try {
        const user = await User.findOne({
            email: req.email,
            password: body.password
        }).exec()
        if (user) {
            res.json({
                success: true
            })
        }
    } catch (e) {
        res.json({
            success: false,
            message: '登录失败',
            e
        })
    }
}
/* 注册 */
exports.postUser = async (req, res, next) => {
    const { body } = req
    let user = await User.findOne({
        email: body.email
    }).exec()
    if (user) {
        res.json({
            success: false,
            message: '邮箱已被注册'
        })
        return
    }
    try {
        user = await new User({
            ...body
        }).save()
        res.json({
            success: true,
            data: user,
        })
    } catch (e) {
        res.json({
            success: false,
            message: '注册失败',
            e
        })
    }
}
