var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.yelp.com/v3/businesses/search?",
  "method": "GET",
  "headers": {
    "authorization": "Bearer 9TJvWv_jji-AYcjG2pZ8ntlJ5PLZAMRTdw78Lxeu_HfcN05yPqu74Zym9CNi6k7cYC8j52VLQm7Y2S33eFZ_lkX26PV-4-mc3wyeSPi2YTmkXgHuRn7m5cRM06M1WXYx",
    "cache-control": "no-cache",
    "postman-token": "be8712b9-45f6-acd5-4e98-d00f3d7d9025"
  },
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
