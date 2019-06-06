'use strict'

const mongoose = require('mongoose')

const Animal = mongoose.model('Animal')

exports.postAnimal = async (req, res, next) => {
    const { body } = req
    try {
        let animalsId = []
        for (let a of body.animals) {
            let animal = await new Animal(a).save()
            animalsId.push(animal._id)
        }
        res.locals.animalsId = animalsId || []
        next()
    } catch (e) {
        res.json({
            success: false,
            message: 'animal保存失败',
            e
        })
    }
}
