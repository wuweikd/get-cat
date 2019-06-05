'use strict'

const mongoose = require('mongoose')

const Animal = mongoose.model('Animal')

exports.postAnimal = async (req, res, next) => {
    const { body } = req
    console.log('body---->', body)
    try {
        const animal = new Animal(body).save
        res.locals.animal = animal || {}
        next()
    } catch (e) {
        res.json({
            success: false,
            message: '保存失败',
            e
        })
    }
}
