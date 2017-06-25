//include function.js?

//'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  /*function takeValue(result){
    result.push("test takeValue");
    testServer(result);
    //pushValue(result);
    //return result;
    return result;
    }*/

    /*
    <<<<<<< HEAD
    const express = require('express');
    const app = express();
    var http = require('http');
    var dt = require('./functions');
    =======
    function pushValue(result)
    {
        result.push("test pushValue");
        return result;
    }
    //const express = require('express');
    //const app = express();
    //var http = require('http');
    //var dt = require('./functions');
    //>>>>>>> 6bea3564532579321b61005326e7e19b447aee70

    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("The date and time are currently: " + dt.myDateTime());
        res.end('Hello World!');
    }).listen(8080);

    app.get('/', function (req, res) {
      res.send('Hello World!');
    });

    app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });





    //document.getElementById("test").innerHTML="Goodbye world!";

    */

    /*************************************
     * 
     * This file should mostly be filled with calling functions in function.js upon an event (i.e. zipcode is entered)?
     * 
     * 
     * 
     * 
     * 
     ******************************************/


    //event: if entered zipcode--> call function (that gets matching results, randomly picks one, returns it)
    //and use the returned information to put into HTML tags in resultPage
    //pseudocode for this: (NOTE: THIS IS SHITTY AND CAN DEFINITELY BE SIMPLIFIED IT'S SUPA LATE RN)
    /*if user searches (i.e. specifies zip code and categories)     //the event
     *       var JSONobj = getRestaurants(zipcode, categories[]);  //returns array of restauarant objects?
     *       generate random number 0-9, inclusive
     *       select the random index from the array of matched restauarants
     *       parse out name, phone number, reviews, address, etc.
     *       insert these elements into resultPage.html to display them to client
     *       assign false boolean to this restaurant (remove it from list to pick from if user rerandomizes)
     *      
     *       if user clicks rerandomize
     *           var status=false;
     *           var options=9;
     *           while (status=false){
     *              if(options===0){
     *                  "There are no more options"
     *                  exit loop and navigate back
     *              }
     *              generate a new random number && index 
     *              if(index's bool ===true){
     *                  display result
     *                  options--
     *              }
     *          }
     */  

});

module.exports = router;


/********************************RESTAURANT CLASS****************************************************************************************************/



var results=[];//will use addRestaurant to populate this

class Restaurant{  
    constructor()/*(zipcode, categories)*/{
        //this.zipcode=zipcode;
        //this.catgories=catagories;
        var zipcode;
        var categories;
        var name;
        var phoneNumber;
        var url;
        var address;
        var review;//or photo?
        var price;
        var image_url;
        var id;
        var rating;
        var isOption=true;
    }
    
    static getZipCode(){
        return zipcode;
    }
    static getCategories(){
        return categories;
    }
    static getName(){
        return name;
    }
    static getPhoneNumber(){
        return phoneNumber;
    }
    static getURL(){
        return url;
    }
    static getAddress(){
        return address;
    }
    static review(){
        return review;
    }
    
    testServer(result){
        result.push("test Server");
        return result;
    }
    
    addRestaurant(restaurant){
        this.zipcode=restaurant.zipcode.toString();
        this.categories=restaurant.categories.toString();
        this.name=restaurant.name.toString();
        this.phoneNumber=restaurant.phoneNumber.toString();
        this.url=restaurant.url.toString();
        this.address=restaurant.address.toString();
        this.review=restaurant.review.toString();
        this.price=restaurant.price.toString();
        this.image_url=restaurant.image_url.toString();
        this.id=restaurant.id.toString();
        this.rating=restaurant.rating.toString();        
        //return this;//return restaurant with data filled in
    }
    
    getRestaurants(zipcode,criteria){
            //do get request based on search criteria
    //populate an array with first 10 restauarants with for loop
    //return the array of restaurant matches
        //var zip= zipcode;
        //var category= categories;    
        const request={
            location: zipcode,
            categories: criteria
        };
        
        var matches=httpRequest(request);//will store results returned at end of http function
                                         //now, matches is an array of restaurant objects
                                         
        //pick a random number from 0 to 19
        var randomIndex = Math.floor(Math.random() * (results.length));
        //access matches[index] components
        var choice = matches[randomIndex];
        //put components into resultPage
        //make matches[index].isOption=false
        
        //handle regenerating
        
        
    
        
    }
    //we should check to see if we can submit a get request specifying at least 3 stars
    isDecent(/*pass restarant id or whole json object*/){
    //parse out # of stars
    //return whether or not it is at least 3 stars (bool)
    }//
    
}











//test for connection between homepage input to entry.js
  function takeValue(result){
    result.push("test takeValue");
    //testServer(result);
    pushValue(result);

    return result;
    }

