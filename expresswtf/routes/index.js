//imports
var express = require('express');
var router = express.Router();   //creates a router

var functions_controller=require('../controllers/functions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messageTest: '' });     //does nothing to home page
});

router.post('/', functions_controller.httpRequest);      //receives post request from the form and sends its inputs to function httpRequest

module.exports = router;
