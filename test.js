/****************************/
/*
Grace's test code:
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.yelp.com/v3/businesses/search?location=92679",
  "method": "GET",
  "headers": {
    "authorization": "Bearer 9TJvWv_jji-AYcjG2pZ8ntlJ5PLZAMRTdw78Lxeu_HfcN05yPqu74Zym9CNi6k7cYC8j52VLQm7Y2S33eFZ_lkX26PV-4-mc3wyeSPi2YTmkXgHuRn7m5cRM06M1WXYx",
    "cache-control": "no-cache",
    "postman-token": "b32abb12-cb18-b298-a1c8-a0aba03ed5ed"
  },
  "data": {
    "grant_type": "client_credentials",
    "client_id": "pWmZBQr8unmmV2mD6AtDRw",
    "client_secret": "XZtHv2xIR1SJ3hv5vIMV0rT3kmShh3AYw6P9AUO8qxY9Q9exsWoBZkRuFVERCTFk"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

********************************/
/*******************************/
/*Alex's Test Code*/
 app.use('Access-Control-Allow-Origin':'*');

 var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.yelp.com/v3/businesses/search?location=92877",
  "method": "GET",
  "headers": {
    "authorization": "Bearer NGhq-Yzq3eJ3BBrTqCVD_TfcB53VKAjLF9RF824bRBsArPgweRWEsEk9XLwInhe1uHDigm9K01SJ7uTCCtvgJPRLKuBXyO7SNygkQHWy6nrww8pVD5TTxKk6tEU4WXYx",
    "cache-control": "no-cache",
    "postman-token": "679e25ad-8b27-71ec-b2cc-712b2ecc54b5"
  }
};



$.ajax(settings).done(function (response) {
  console.log(response);
});

