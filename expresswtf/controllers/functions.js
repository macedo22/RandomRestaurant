'use strict';

//use max number of results that can be requested from Yelp
const numberOfResults=50;

//imports
const express = require('express');
const yelp = require('yelp-fusion');
const http = require('http');

//used for Yelp API authentication
const clientId = 'UCn9wNpGoW4R8I-skfKghw';
const clientSecret = 'sU7Db2PGwyTiFk338fP1YX7CSlpTyp8NZ7ap3wvOILXLV8yK3KDN5tR3oO6U9pwx';

//Fisher-Yates shuffle algorithm
//randomizes array of businesses representing search results
function shuffle(array) {
    if(array.length===0){
        return; //if no search results found, exit
    }
        
        for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};
    

/*Accepts request body from index post router containing user's search 
  criteria to return a random list of restaurants*/
exports.httpRequest=function(req,res,next){
        
    console.log(req.body);
        
        var categoriesInput;
        var zipInput=req.body.ZipCode;
        if (!req.body.SelBranch){
            categoriesInput="restaurants";     //if no category was selected, default to all restaurants
        }
        else{
            categoriesInput=req.body.SelBranch;
        }
        
    console.log(zipInput + " " + categoriesInput);
    
    //user's search criteria
    const searchRequest = {
        location: zipInput,
        categories: categoriesInput,
        limit: numberOfResults
    };
    
   
     yelp.accessToken(clientId, clientSecret).then(response => {   // pass client credentials
        const client = yelp.client(response.jsonBody.access_token);  //client now holds authentication token
         client.search(searchRequest).then(response => {           //send request to Yelp matching search criteria
            const matches = response.jsonBody.businesses;        //store Yelp response list of restaurants in an array
            var shuffled = shuffle(matches);             //shuffle the array of restaurants
            res.render('index', {matchesArray: JSON.stringify(shuffled)});      //render the homepage with the randomized results
           
            const prettyJson=JSON.stringify(shuffled, null, 4);      //format results into Pretty JSON for logging in the console
            console.log(prettyJson);
        });                    
   }).catch(e => {       //catch and log any errors if search is unsuccessful
  console.log(e);
    });
  };
