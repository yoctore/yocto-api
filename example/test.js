var express     = require('express'); // Load express
var logger        = require('yocto-logger');
var db            = require('yocto-mongoose')(logger);
var restApi       = require('../src/index.js')(logger);
var app           = express(); // Create app
var path          = require('path');
var fs            = require('fs');
var bodyParser  = require('body-parser'); // load bodyparser
var base = path.normalize(process.cwd());

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// set our port
var port = 3974;


// Connect
db.connect('mongodb://localhost:27017/test').then(function() {
  // load models
  db.models('./example/models');
  db.validators('./example/controllers');
  db.methods('./example/methods');
  db.enums('./example/enums');
  if (db.isReady(true)) {
    db.load().then(function() {

      console.log('===> start API ')

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

      app.listen(port);

      console.log('===> app listen on port : ', port)

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
