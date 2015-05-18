'use strict';

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var _          = require('lodash');
var mongoose   = require('mongoose');
var routes     = require('./app/routes/controller.js');

/**
 * Test server for Yocto Api
 *
 */

// connect to our database
mongoose.connect('mongodb://localhost:27017');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8080;

//Initialise the router
routes.init();
//Set router
app.use('/api', routes.router);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
