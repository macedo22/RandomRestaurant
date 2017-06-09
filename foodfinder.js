$(function () {

var API_HOST = "https://api.yelp.com";
var SEARCH_PATH = "/v3/businesses/search";
var BUSINESS_PATH = "/v3/businesses/";
var TOKEN_PATH = "/oauth2/token";
var GRANT_TYPE = "client_credentials";

var CLIENT_ID = "pWmZBQr8unmmV2mD6AtDRw";  // dummy id for stackoverflow purposes
var CLIENT_SECRET = "XZtHv2xIR1SJ3hv5vIMV0rT3kmShh3AYw6P9AUO8qxY9Q9exsWoBZkRuFVERCTFk";  // dummy secret for stackoverflow purposes

var SEARCH_TERM = "food";
var SEARCH_RADIUS = 500;        // radius is in meters
var SORT_BY = "distance";


$.ajax(API_HOST + TOKEN_PATH, {
    type: "POST",
    data: {
        grant_type: GRANT_TYPE,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
    },
    contentType: "application/x-www-form-urlencoded",
    dataType: "json",
    success: function (data) {
        console.log(data);

    },
    error: function () {
        console.log("post call error");
    }


})
});
