'use strict';

var express    = require('express'); // Load express
var bodyParser = require('body-parser'); // load bodyparser
var mongoose   = require('mongoose'); // Load the mongodb driver
var routes     = require('../app/routes/controller.js'); // Load the api
var app        = express(); // Create app
var path     = require('path');
var fs        = require('fs');

var base = path.normalize(__dirname);

// connect to our database
mongoose.connect('mongodb://localhost:27017');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8080;

//Initialise the API router
routes.init(base+'/routes/routes.json', base +'/models/');

//Use the router
app.use('/api', routes.router);

// START THE SERVER
app.listen(port);
