var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.yelp.com/oauth2/token",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "2422a942-f828-6f01-200e-7c785725c04a",
    "content-type": "application/x-www-form-urlencoded"
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

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.yelp.com/v3/businesses/search?location=92679",
  "method": "GET",
  "headers": {
    "authorization": "Bearer 9TJvWv_jji-AYcjG2pZ8ntlJ5PLZAMRTdw78Lxeu_HfcN05yPqu74Zym9CNi6k7cYC8j52VLQm7Y2S33eFZ_lkX26PV-4-mc3wyeSPi2YTmkXgHuRn7m5cRM06M1WXYx",
    "cache-control": "no-cache",
    "postman-token": "79af742c-5be0-4d62-c30d-09cff36418ed"
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
