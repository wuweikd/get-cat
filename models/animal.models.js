'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnimalSchema = new Schema({
    name: {
      type: String
    },
    age: {
        type: String
    },
    sex: {
        type: String
    },
    character: {
        type: String
    },
    Species: {
        type: String
    }
})

mongoose.model('Animal', AnimalSchema)
