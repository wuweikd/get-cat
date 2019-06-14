'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String
    },
    content: {
        type: String,
    },
    imgs: [{
        type: String
    }],
    views: {
        type: Number,
        default: 0
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    animals: [{
        type: Schema.Types.ObjectId,
        ref: 'Animal',
    }]
}, {
    timestamps: {
        createAt: 'createdAt',
        updateAt: 'updateAt'
    }
})

mongoose.model('Article', ArticleSchema)
