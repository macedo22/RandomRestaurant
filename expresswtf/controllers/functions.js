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
    
    function shuffle(array) {
    if(array.length===0){
        res.send("We did not find any matches for this search criteria! :(");
    }
        
        for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};
    


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
            const matches = response.jsonBody.businesses;
            var shuffled = shuffle(matches);
            res.render('index', {matchesArray: JSON.stringify(shuffled)});
           
            const prettyJson=JSON.stringify(shuffled, null, 4);
            console.log(prettyJson);
        });                    
   }).catch(e => {
  console.log(e);
    });
  };
