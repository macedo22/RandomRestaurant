var express = require('express');
var router = express.Router();

var functions_controller=require('../controllers/functions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', functions_controller.httpRequest);


module.exports = router;
