var express = require('express');
var router = express.Router();
var formidable = require("formidable");
var util=require("util");

var functions_controller=require('../controllers/functions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //res.send('Received GET request WEEEEE');
});

router.post('/', functions_controller.httpRequest);//add back after post works

//router.post('/', function(req,res){
    //console.log("received post request yayyyy!");
    //res.send('Received POST request WEEEEE');
    
    /*
    var form =new formidable.IncomingForm
    
    form.parse(req,function(err,fields,files){
        res.writeHead(200,{
            'content-type': 'text/plain'
        });
        res.write('received the data:\n\n');
        res.end(util.inspect({
            fields: fields,
            files: files
        }))
    })*/
});


module.exports = router;
