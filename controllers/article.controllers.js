'use strict'

const mongoose = require('mongoose')
const Article = mongoose.model('Article')

/* 查询所有文章 */
exports.getArticles = async (req, res, next) => {
    console.log(req)
    const {
        page = 1,
        limit = 10,
        keywords = '',
        userId = '',
        likeId = ''
    } = req.query

    const skipCount = Number(page - 1) * limit
    const limitCount = Number(limit)
    const reg = new RegExp(decodeURIComponent(keywords), 'i')

    let findOption = {}

    if (keywords) {
        findOption = {
            $or: [{
                title: {
                    $regex: reg
                }
            }, {
                content: {
                    $regex: reg
                }
            }]
        }
    }
    if (userId) {
        findOption = {
            user: userId
        }
    }
    if (likeId) {
        findOption = {
            likes: likeId
        }
    }
    try {
        const total = (await Article.find({
            ...findOption
        }).exec()).length

        const data = await Article.find({
            ...findOption
        })
            .populate({
                path: 'user',
                select: 'id email'
            })
            .populate({
                path: 'animal',
                select: 'name age sex'
            })
            .skip(skipCount)
            .limit(limitCount)
            .sort({
                createdAt: '-1'
            })
            .exec()

        res.json({
            success: true,
            data: data,
            total
        })
    } catch (e) {
        res.status(404).json({
            success: false,
            message: '文章获取失败',
            e
        })
    }
}

/* 写文章 */
exports.postArticle = async (req, res, next) => {
    let { body } = req
    try {
        body = await new Article(body).save()
        res.json({
            success: true,
            data: body
        })
    } catch (e) {
        res.json({
            success: false,
            message: '保存失败',
            e
        })
    }
}
