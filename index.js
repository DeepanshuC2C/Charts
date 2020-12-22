var express = require('express');
//Create the application with express
var app = express();
// pull information from HTML POST
var bodyParser = require('body-parser');

const https= require('https');

const http = require('http');
app.use(bodyParser.urlencoded({
    'extended': 'true'
  }));
  // parse application/json
  app.use(bodyParser.json());
  // parse application/vnd.api+json as json
  app.use(bodyParser.json({
    type: 'application/vnd.api+json'
  }));





  http.createServer(app).listen(8080);