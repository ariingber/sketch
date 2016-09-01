// 'use strict'
var path = require('path');
var express = require('express');
var logger = require('morgan');
var request = require('request');

/* app setting */
var port = process.env.PORT || 3000;
var app = express();
var api_key = "api_key=dc6zaTOxFJmzC";

var giphyRemoteData = "http://api.giphy.com/v1/gifs/";


app.use(logger('dev'));
/*Views*/
app.set('views', './views');
app.set('view engine', 'ejs');

// static route to public
app.use(express.static(path.join(__dirname, './public/')));


/* Routes */
// Landing Page
app.get('/', function(req, res){
  res.render('./pages/index')
})

// Random Giphy
app.get('/random', function(req, res){
  request({
    url: giphyRemoteData + 'random?' + api_key,
    qs:{fmt:'html'}
  }, function(err, response, body) {
    res.send(body);
  })
})

// Kitten Giphy
app.get('/kitten', function(req, res) {
  request({
    url: giphyRemoteData + 'search?q=kitten&' + api_key,
    qs:{fmt:'html'}
  }, function(err, response, body) {
    res.send(body);
  })
})

// Puppies Giphy
app.get('/puppies', function(req, res) {
  request({
    url: giphyRemoteData + 'search?q=puppies&' + api_key,
    qs:{fmt:'html'}
  }, function(err, response, body) {
    res.send(body);
  })
})
// Pokemon Giphy
app.get('/pokemon', function(req, res) {
  request({
    url: giphyRemoteData + 'search?q=pokemon&' + api_key,
    qs:{fmt:'html'}
  }, function(err, response, body) {
    res.send(body);
  })
})
// searchGif/:searchParameter
app.get('/searchGif/:searchParameter', (req, res) => {
  request({
    url: giphyRemoteData + 'search',
    qs: {api_key: api_key, q: req.params.searchParameter, limit:20}
  },
  function(err, apires, body) {
    res.send(body)
  });
});

// searchGifById/:id




var port = process.env.PORT || 3000;
var server = app.listen(port);
