var Yelp = require('node-yelp-fusion');
var yelp=new Yelp({ id:pWmZBQr8unmmV2mD6AtDRw, secret:XZtHv2xIR1SJ3hv5vIMV0rT3kmShh3AYw6P9AUO8qxY9Q9exsWoBZkRuFVERCTFk});

yelp.search("term=Biryani&location=New York")
    .then(function(result){
           res.json(result);
        });
