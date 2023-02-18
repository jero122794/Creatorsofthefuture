var express = require('express');
var router = express.Router();
const { index } = require("../controllers/indexController")
const { error404 } = require("../controllers/indexController")
/* GET home page. */
router.get('/', index);
router.get('/error', error404)

module.exports = router;
