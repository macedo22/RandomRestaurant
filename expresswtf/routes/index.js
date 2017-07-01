/*Establishes a router that will match HTTP requests to the home page 
 to the correct path.*/


//imports
var express = require('express');
var router = express.Router();   //creates a router

var functions_controller=require('../controllers/functions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messageTest: '' });     //renders home page into HTML
});

/*POST request for home page */
router.post('/', functions_controller.httpRequest);      //receives post request from the form and sends its inputs to function httpRequest

module.exports = router;
