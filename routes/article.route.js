const express = require('express')
const router = express.Router()
const article = require('../controllers/article.controller')
const animal = require('../controllers/animal.controller')
const check = require('../middleware/check.middleware')

router.post('/getArticles', article.getArticles)
    .post('/postArticle',
        check.auth('token'),
        animal.postAnimal,
        article.postArticle)

module.exports = router
