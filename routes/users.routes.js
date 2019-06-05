var express = require('express');
var router = express.Router();
const user = require('../controllers/user.controllers')
const check = require('../middleware/check.middleware')
/* GET users listing. */
router
    .post('/login',
        user.login)
    .post('/postUser',
        check.auth('token'),
        user.postUser)

module.exports = router;
