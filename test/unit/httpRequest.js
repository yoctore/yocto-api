'use strict';

var expect        = require("chai").expect;
var _             = require('lodash');
var superagent    = require('superagent');
var assert        = require('assert');
var async         = require('async');
var logger        = require('yocto-logger')
var express       = require('express'); // Load express
var logger        = require('yocto-logger');
var db            = require('yocto-mongoose')(logger);
var restApi       = require('../../src/index.js')(logger);
var app           = express(); // Create app
var path          = require('path');
var fs            = require('fs');
var bodyParser    = require('body-parser'); // load bodyparser
var base          = path.normalize(process.cwd());

// set our port
var port = 3974;
var url = 'http://127.0.0.1:' + port ;
var accountId = '';

// disableConsole
logger.disableConsole();

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

before(function (done) {
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

        app.listen(port);
        done();

      }).catch(function (error) {
        console.log('load error : ', error);
        done(error);
      });
    }
  }).catch(function(error) {
    if (db.isConnected()) {
      db.disconnect().then(function() {
        done();
      }, function(error) {
        console.log('diconnect failed');
        console.log(error);
        done(error);
      });
    }
  });
});

describe('Test process', function (done) {

  /*******************************************************/
  /* All next method should not be called syncrhonously  */
  /*******************************************************/
  // use sync series because we will manipulate the account created for user
  async.series([

    function (callback) {

      describe('GET method : ', function () {

        // should retrieve user
        it('returns all user - should return 200 and json object', function (done) {
          superagent
          .get(url + '/account').end(function(err, res) {
            assert.ifError(err);
            assert.equal(res.body.code, 200000);
            done();
            callback(null);
          });
        });
      });
    },
    function (callback) {
      describe('HEAD method : ', function () {

        // should retrieve user
        it('returns heand of all user - should return 200 and json object', function(done) {
          superagent
          .get(url + '/account').end(function(err, res) {
            assert.ifError(err);
            assert.equal(res.body.code, 200000);
            done();
            callback(null);

          });
        });
      });
    },
    function (callback) {
      describe('POST method : ', function () {

        // should not post because body is xrong
        it('should not create user because body is empty', function(done) {
          superagent
          .post(url + '/account')
          .end(function(err, res) {
            assert.ifError(err);
            assert.equal(res.body.code, 400000);
            done();
            callback(null);

          });
        });
      });
    },
    function (callback) {
      describe('PATCH method : ', function () {

        it('should not patch user because id was not specified', function(done) {
          superagent
          .patch(url + '/account')
          .send({
            name      : 'aaaa',
            test      : 'bbbb'
          })
          .end(function(err, res) {
            assert.ifError(err);
            assert.equal(res.body.code, 400000);
            done();
            callback(null);

          });
        });
      });
    },
    function (callback) {
      describe('PUT method :', function () {

        it('should not put user because id was not specified', function(done) {
          superagent
          .put(url + '/account')
          .send({
            name      : 'aaaa',
            test      : 'bbbb'
          })
          .end(function(err, res) {
            assert.ifError(err);
            assert.equal(res.body.code, 400000);
            done();
            callback(null);

          });
        });
      });
    },
    function (callback) {
      describe('DELETE method : ', function () {

        it('should not delete user because id was not specified', function(done) {
          superagent
          .delete(url + '/account')
          .end(function(err, res) {
            assert.ifError(err);
            assert.equal(res.body.code, 400000);
            done();
            callback(null);
          });
        });
      });
    },
    function (callback) {

      describe('POST method : ', function () {

        it('should create user because body is wrong', function(done) {
          superagent
          .post(url + '/account')
          .send({
            name      : 'aaaa',
            test      : 'bbbb'
          })
          .end(function(err, res) {
            assert.ifError(err);
            assert.equal(res.body.code, 200000);
            done();

            accountId = res.body.data._id;
            // indicate that async function is end
            callback(null);
          });
        });
      });
    },
    function (callback) {

      describe('GET method : ', function () {

        it('sould get account created with id : ' + accountId, function (done) {
          superagent
          .get(url + '/account/' + accountId).end(function(err, res) {
            assert.ifError(err);
            assert.equal(res.body.code, 200000);
            done();
            // indicate that async function is end
            callback(null);
          });
        });
      });
    },
    function (callback) {

      describe('PATCH method : ', function () {

        it('sould patch account created with id : ' + accountId, function (done) {
          superagent
          .patch(url + '/account/' + accountId)
          .send({
            name : "toto"
          }
        ).end(function(err, res) {
            assert.ifError(err);
            assert.equal(res.body.code, 200000);
            done();
            // indicate that async function is end
            callback(null);
          });
        });
      });
    },
    function (callback) {

      describe('PUT method : ', function () {

        it('sould put account created with id : ' + accountId, function (done) {
          superagent
          .put(url + '/account/' + accountId)
          .send({
            name : "toto"
          }
        ).end(function(err, res) {
            assert.ifError(err);
            assert.equal(res.body.code, 200000);
            done();
            // indicate that async function is end
            callback(null);
          });
        });
      });
    },
    function (callback) {

      describe('DELETE method : ', function () {

        it('sould not delete account because deleted_date is not specified : ', function (done) {
          superagent
          .delete(url + '/account/' + accountId)
          .end(function(err, res) {
            assert.ifError(err);
            assert.equal(res.body.code, 400000);
            done();
            // indicate that async function is end
            callback(null);
          });
        });
      });
    }
  ], function (err, results) {
    // close server
    app.close();
    closeServer();

    done();
  });
});

// close db connect
var closeServer = function () {
  if (db.isConnected()) {
    db.disconnect().then(function() {
    }, function(error) {
      console.log('diconnect to db failed', error);
    });
  }
};
