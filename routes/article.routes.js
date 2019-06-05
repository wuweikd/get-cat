const express = require('express')
const router = express.Router()
const article = require('../controllers/article.controllers')
const animal = require('../controllers/animal.controllers')

router.post('/getArticles', article.getArticles)
    .post('/postArticle', animal.postAnimal, article.postArticle)

module.exports = router
