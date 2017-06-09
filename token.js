const RapidAPI = require('rapidapi-connect');
const rapid = new RapidAPI("default-application_5935a3f5e4b06b01ff6bb8c4", "6aa01b87-c402-4b5c-8ad7-7b8188afd455");

rapid.call('YelpAPI', 'getAccessToken', { 
	'appId': 'pWmZBQr8unmmV2mD6AtDRw',
	'appSecret': 'XZtHv2xIR1SJ3hv5vIMV0rT3kmShh3AYw6P9AUO8qxY9Q9exsWoBZkRuFVERCTFk'

}).on('success', (payload)=>{
	 /*YOUR CODE GOES HERE*/ 
}).on('error', (payload)=>{
	 /*YOUR CODE GOES HERE*/ 
});
