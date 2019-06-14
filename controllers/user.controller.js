'use strict'

const mongoose = require('mongoose')
const User = mongoose.model('User')
const token = require('../utils/token.util')
/* 登录 */
exports.login = async (req, res, next) => {
    const { body } = req
    try {
        const user = await User.findOne({
            email: body.email,
            password: body.password
        }).exec()
        if (user) {
            const t = token.sign(user)
            res.json({
                success: true,
                data: {
                    token: t
                }
            })
        } else {
            res.json({
                success: false,
                message: '用户名或密码错误'
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
/* 获取用户信息 */
exports.getUser = async (req, res, next) => {
    let user = await User.findOne({
        email: body.email
    }).exec()
    if (user) {
        res.json({
            success: true,
            data: {
                user
            }
        })
    } else {
        res.json({
            success: false,
            message: '查询失败'
        })
    }
}
