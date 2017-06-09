(function () {
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.yelp.com/oauth2/token",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "4e888c00-9f54-9d68-8cb9-95a31acac8b5"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

});
