var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.yelp.com/oauth2/token",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "b7cc69b9-5fe9-8226-8490-49a58187c8d9",
    "content-type": "application/x-www-form-urlencoded"
  },
  "data": {
    "client_id": "pWmZBQr8unmmV2mD6AtDRw",
    "client_secret": "XZtHv2xIR1SJ3hv5vIMV0rT3kmShh3AYw6P9AUO8qxY9Q9exsWoBZkRuFVERCTFk",
    "grant_type": "client_credentials"
  }
}

jQuery.ajax(settings).done(function (response) {
  console.log(response);
});
