var express = require('express');
var router = express.Router();
var formidable = require("formidable");
var util=require("util");

var functions_controller=require('../controllers/functions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messageTest: '' });
});

router.post('/', functions_controller.httpRequest);

module.exports = router;
