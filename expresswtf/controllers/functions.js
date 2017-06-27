'use strict';

const numberOfResults=50;//subject to change
const express = require('express');
const yelp = require('yelp-fusion');
const http = require('http');
const formidable = require("formidable");
const util=require("util");


const clientId = 'UCn9wNpGoW4R8I-skfKghw';
const clientSecret = 'sU7Db2PGwyTiFk338fP1YX7CSlpTyp8NZ7ap3wvOILXLV8yK3KDN5tR3oO6U9pwx';

//we should check to see if we can submit a get request specifying at least 3 stars
   // isDecent(/*pass restarant id or whole json object*/){
    //parse out # of stars
    //return whether or not it is at least 3 stars (bool)
    //}*/
    


exports.httpRequest=function(req,res,next){
        
    console.log(req.body);
        
        var zipInput=req.body.ZipCode;
        var categoriesInput=req.body.SelBranch;
        
        console.log(zipInput + " " + categoriesInput);
    
    const searchRequest = {
        location: zipInput,
        categories: categoriesInput,
        limit: numberOfResults
    };
    
   
     yelp.accessToken(clientId, clientSecret).then(response => {   // pass client credentials
        const client = yelp.client(response.jsonBody.access_token);  //client now holds token in json form?-like the post call
         client.search(searchRequest).then(response => {
            //const firstResult = response.jsonBody.businesses[0];
            const matches = response.jsonBody.businesses;
            res.render('index', {matchesArray: JSON.stringify(matches)});
           
            const prettyJson=JSON.stringify(matches, null, 4);
            console.log(prettyJson);
        });                    
   }).catch(e => {
  console.log(e);
    });
  };
//we should check to see if we can submit a get request specifying at least 3 stars
function isDecent(/*pass restarant id or whole json object*/){
    //parse out # of stars
    //return whether or not it is at least 3 stars (bool)
};//

//function isArray(myArray) {
 //   return myArray.constructor.toString().indexOf("Array") > -1;  // validates that object passed is an array
//};
