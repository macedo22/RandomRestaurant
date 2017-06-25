var express = require('express');
var router = express.Router();

var functions_controller=require('../controllers/functions');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('Received GET request WEEEEE');
});

//router.post('/', functions_controller.httpRequest);//add back after post works

router.post('/', function(req,req,next){
    res.send('Received POST request WEEEEE');
});


module.exports = router;
