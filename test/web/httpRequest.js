/**
* Unit tests
*/
var expect     = require("chai").expect;
var _          = require('lodash');
var server     = require('../../example/server-with-exports.js');
var superagent = require('superagent');
var assert     = require('assert');
var status     = require('http-status');

describe('httpRequests', function() {
  var app;
  var url = 'http://localhost:8081/api';
  before(function() {
    app = server(8081);
  });

  after(function() {
    app.close();
  });


  it('returns all user - should return 200 and json object', function(done) {

    superagent.get(url + '/user').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.OK);

      var result = JSON.parse(res.text);
      done();
    });
  });

  it('returns username if name param is a valid user', function(done) {

    superagent.get(url + '/user/3').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.OK);

      done();
    });
  });

  it('returns username if name param is a valid user', function(done) {

    superagent.post(url + '/user')
    .send({ name : 'totot'})
    .end(function(err, res) {
      var result = JSON.parse(res.text);

      assert.ifError(err);
      assert.equal(res.status, status.OK);
      assert.equal(result.message, 'Validation failed');

      done();
    });
  });



});
