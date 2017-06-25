/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*myDateTime = function () {
    return Date();
};*/



//self-made functions to export


/*
 * 
 * 
 const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};
yelp.accessToken(clientId, clientSecret).then(response => {   // pass client credentials
  const client = yelp.client(response.jsonBody.access_token);  //client now holds token in json form?-like the post call
  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
  });
}).catch(e => {
  console.log(e);
});
*/







/******SAMPLE CODE ABOVE. CLASS AND FUNCTION PROTOTYPES BELOW*************/


'use strict';

const numberOfResults=20;//subject to change
const express = require('express');
const yelp = require('yelp-fusion');
const http = require('http');
const formidable = require("formidable");
const util=require("util");



/*
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('Hello World!');
}).listen(8080);
*/
/*
app.get('/', function (req, res) {
  res.send('GET Request to the homepage');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

*/

// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const clientId = 'UCn9wNpGoW4R8I-skfKghw';
const clientSecret = 'sU7Db2PGwyTiFk338fP1YX7CSlpTyp8NZ7ap3wvOILXLV8yK3KDN5tR3oO6U9pwx';


//httpRequest(req);



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


exports.httpRequest=function(req,res,next){
    // const searchRequest = {
       // term:'Four Barrel Coffee',
       // location: 'san francisco, ca'
    // };
        
        //var inputScript = JSON.parse(req);
        
        //var zipInput=inputScript.ZipCode;
       // var categoriesInput=inputScript.SelBranch;
        
        console.log("made it here");
        
        //var form =new formidable.IncomingForm();
    
        //form.parse(req,function(err,fields,files){
          //  res.writeHead(200,{
                //'content-type': 'text/plain'
           // });
           // res.write('received the data:\n\n');
           // res.end(util.inspect({
                //fields: fields,
                //files: files
            //}))
            
            //zipInput=fields.ZipCode;
            //categoriesInput=fields.SelBranch;
        //});
    
    //const searchRequest = {
        //location: zipInput,
        //categories: categoriesInput
    //};
    
    //console.log("now i made it here!");
    
    //res.send(searchRequest);
    
    
    //console.log("made it allll the way");
    
    
    /*
     yelp.accessToken(clientId, clientSecret).then(response => {   // pass client credentials
        const client = yelp.client(response.jsonBody.access_token);  //client now holds token in json form?-like the post call
         client.search(searchRequest).then(response => {
            const firstResult = response.jsonBody.businesses[0];
            const prettyJson = JSON.stringify(firstResult, null, 4);
            console.log(prettyJson);
            res.send(prettyJson);
        });
   }).catch(e => {
  console.log(e);*/
//});
    
    
    
    
    
    
    //res.send('<p>some html</p>');
    
  
    //check that name field isn't empty
    //req.checkBody('ZipCode','Zip Code required').notEmpty();
 
    //Trim and escape the name field
    //req.sanitize('ZipCode').escape();
    //req.sanitize('ZipCode').trim();

    //Run validators
   // var errors = req.validationErrors();

    //store sanitized zipcode into new variable
    //var inputZipCode=req.body.ZipCode;
    
    //if(errors){
        //if there are errors, render again--->need to implement this
       // res.send('BIG FAT ERROR WITH INPUT');
       // return;
    //}
    //else{
        //Data from form is valid
        //submit request to yelp here?**************
        
        /*
        var results=[];
        yelp.accessToken(clientId, clientSecret).then(response => {   // pass client credentials
            const client = yelp.client(response.jsonBody.access_token);  //client now holds token in json form?-like the post call

            client.search(req).then(response => {
                var temp;
                for(var i=0;i<numberOfResults;i++){
                    temp=response.json.Body.businesses[i];
                    results[i]=new Restaurant();
                    results[i].addRestaurant(temp);
                    const prettyJson = JSON.stringify(temp);
                    console.log(results[i]);
                }
            });
        }).catch(e => {
            console.log(e);
        });
        
        res.send('ME NO FIND ERRORS');
        
        return results;
    
   */
   
   
    //}
    
};

function testServer(result)
{
  result.push("test Server");
  return result;
}



/*I think this is the one we don't need
htttpRequest=function(req){
  yelp.accessToken(clientId, clientSecret).then(response => {   // pass client credentials
    const client = yelp.client(response.jsonBody.access_token);  //client now holds token in json form?-like the post call
    
    client.search(req).then(response => {
      var temp;
      for(var i=0;i<numberOfResults;i++){
          temp=response.json.Body.businesses[i];
          temp=new(Restaurant);
          results[i]=addRestaurant(temp);
          const prettyJson = JSON.stringify(temp);
          console.log(results[i]);
      }
    });
  }).catch(e => {
    console.log(e);
  });
  return results;
};
*/




/******************Fuctions to create*************/


//function getRestaurants(zipcode, categories){
    //do get request based on search criteria
    //populate an array with first 10 restauarants with for loop
    //return the array of restaurant matches
//};



//we should check to see if we can submit a get request specifying at least 3 stars
function isDecent(/*pass restarant id or whole json object*/){
    //parse out # of stars
    //return whether or not it is at least 3 stars (bool)
};//





function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;  // validates that object passed is an array
};
