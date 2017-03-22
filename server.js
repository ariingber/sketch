var express = require('express');
var logger = require('morgan');
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');


/* app setting */
var port = process.env.PORT || 3000;
var app = express();
var server = app.listen(port);

// parse incoming forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static route to public
app.use(express.static(path.join(__dirname, './public/')));

// log
app.use(logger('dev'));

/*Views*/
app.set('views', './views');
app.set('view engine', 'ejs');

/* Routes */
// Landing Page
app.get('/', function(req, res){
  console.log('Hey Ari, server is running on port 3000')
  res.render('./pages/patient/index')
})

app.get('/products', function(req, res){
  res.render('./pages/patient/products')
})

app.get('/about', function(req, res){
  res.render('./pages/patient/about')
})

app.get('/press', function(req, res){
  res.render('./pages/patient/press')
})

app.get('/resources', function(req, res){
  res.render('./pages/patient/resources')
})

app.get('/contact', function(req, res){
  res.render('./pages/patient/contact')
})

app.get('/screener', function(req, res){
  res.render('./pages/patient/screener')
})

app.get('/videos', function(req, res){
  res.render('./videos')
})

app.get('/health_care', function(req, res){
  res.render('./pages/client/health_care')
})

app.get('/help', function(req, res){
  res.render('./pages/client/help')
})
