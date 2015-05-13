'use strict';

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var _          = require('lodash');
var mongoose   = require('mongoose');

/**
 * Main class of Yocto API
 *
 *
 */

//Load routes
var userRoutes   = require('./app/routes/users.js');
var userIDRoutes = require('./app/routes/usersID.js');

// connect to our database
mongoose.connect('mongodb://localhost:27017');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8080;

//Set routes
app.use('/api', userRoutes);
app.use('/api', userIDRoutes);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
