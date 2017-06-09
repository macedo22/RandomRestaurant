
'use strict';
 
const yelp = require('yelp-fusion');

const clientId = 'pWmZBQr8unmmV2mD6AtDRw';
const clientSecret = 'XZtHv2xIR1SJ3hv5vIMV0rT3kmShh3AYw6P9AUO8qxY9Q9exsWoBZkRuFVERCTFk';

const token = yelp.accessToken(clientId, clientSecret).then(response => {
  console.log(response.jsonBody.access_token);
}).catch(e => {
  console.log(e);
});

const client = yelp.client(token);
 
client.search({
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});
