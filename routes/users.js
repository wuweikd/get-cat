var express = require('express');
var router = express.Router();
const user = require('../controllers/user')
/* GET users listing. */
router
    .post('/login', user.login)
    .post('/postUser', user.postUser)

module.exports = router;
