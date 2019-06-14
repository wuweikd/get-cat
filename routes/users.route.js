var express = require('express');
var router = express.Router();
const user = require('../controllers/user.controller')
const check = require('../middleware/check.middleware')
router
    .post('/login',
        user.login)
    .post('/postUser',
        check.auth('token'),
        user.postUser)

module.exports = router;
