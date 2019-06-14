var express = require('express');
var router = express.Router();
const upload = require('../controllers/tools/upload.controller')

router.post('/upload-img', upload.img)

module.exports = router
