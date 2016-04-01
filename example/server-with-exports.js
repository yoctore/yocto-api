'use strict';
var express       = require('express'); // Load express
var logger        = require('yocto-logger');
// disableConsole
logger.disableConsole();

var db            = require('yocto-mongoose')(logger);
var restApi       = require('../src/index.js')(logger);
var app           = express(); // Create app
var path          = require('path');
var fs            = require('fs');
var bodyParser    = require('body-parser'); // load bodyparser
var base          = path.normalize(process.cwd());
var q             = require('q');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// set our port
var port = 3974;

var createServer = function(port) {
  // Connect
  db.connect('mongodb://localhost:27017/test').then(function() {
    // load models
    db.models('./example/models');
    db.validators('./example/controllers');
    db.methods('./example/methods');
    db.enums('./example/enums');
    if (db.isReady(true)) {
      db.load().then(function() {

        // Initialise the API router
        restApi.init(
          // simulate yctp core stacks
          {
            app : {
              app : app
            },
            config : {}
          }, base + '/example/routes.json',
          // simulate wrapper mongoose
          {
            db : db
          },
          base + '/example/callback/', base + '/example/endpoints.js'
        );
      }, function() {
        console.log('load error');
      });
    }
  }).catch(function(error) {
    if (db.isConnected()) {
      db.disconnect().then(function() {

      }, function(error) {
        console.log('diconnect failed');
        console.log(error);
      });
    }
  });

  // START THE SERVER
  return app.listen(port);
};

module.exports = createServer;
