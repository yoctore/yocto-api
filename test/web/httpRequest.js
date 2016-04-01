'use strict';

var expect     = require("chai").expect;
var _          = require('lodash');
var server     = require('../../example/server-with-exports.js');
var superagent = require('superagent');
var assert     = require('assert');
var async      = require('async');
var logger     = require('yocto-logger')

// disableConsole
logger.disableConsole();


describe('httpRequests', function() {
  var app;
  var port = 3974;
  var url = 'http://localhost:' + port ;

  app = server(port);

  if (app) {
    // should retrieve user
    it('GET : returns all user - should return 200 and json object', function(done) {
      superagent
      .get(url + '/account').end(function(err, res) {
        assert.ifError(err);
        assert.equal(res.body.code, 200000);
        done();
      });
    });

    // should retrieve user
    it('HEAD : returns heand of all user - should return 200 and json object', function(done) {
      superagent
      .get(url + '/account').end(function(err, res) {
        assert.ifError(err);
        assert.equal(res.body.code, 200000);
        done();
      });
    });

    // should not post because body is xrong
    it('POST : should not create user because body is empty', function(done) {
      superagent
      .post(url + '/account')
      .end(function(err, res) {
        assert.ifError(err);
        assert.equal(res.body.code, 400000);
        done();
      });
    });

    it('PATCH : should not patch user because id was not specified', function(done) {
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
      });
    });

    it('PUT : should not put user because id was not specified', function(done) {
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
      });
    });

    it('DELETE : should not delete user because id was not specified', function(done) {
      superagent
      .delete(url + '/account')
      .end(function(err, res) {
        assert.ifError(err);
        assert.equal(res.body.code, 400000);
        done();
      });
    });

    var accountId = '';
    /*******************************************************/
    /* All next method should not be called syncrhonously  */
    /*******************************************************/
    // use sync series because we will manipulate the account created for user
    async.series([

      function (callback) {

        describe('POST account : ', function () {

          it('POST : should create user because body is wrong', function(done) {
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

        describe('Get account : ', function () {

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
      },function (callback) {

        describe('PATCH account : ', function () {

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
      },function (callback) {

        describe('PUT account : ', function () {

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
      },function (callback) {

        describe('DELETE account : ', function () {

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

      // method call to close server
      after(function() {
        app.close();
      });
      done();
    });
  }
});
