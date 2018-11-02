var fs = require('fs');
var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('owl.html', { root:  'public' });
});

router.get('/integer', function(req, res ,next){
    var url = "http://numbersapi.com/";
    url += req.query['q'];
    url += "?json";
    request(url).pipe(res);
});


  
module.exports = router;
