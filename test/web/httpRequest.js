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
  var port = 8089;
  var url = 'http://localhost:' + port + '/api';
  before(function() {
    console.log('--- start server');
    app = server(port);
  });

  after(function() {
    app.close();
    console.log('--- close server');
  });


  it('returns all user - should return 200 and json object', function(done) {

    superagent.get(url + '/user').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.OK);

      var result = JSON.parse(res.text);
      done();
    });
  });

  it('returns error if param id is not a goofformat', function(done) {

    superagent.get(url + '/user/3').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, 400);

      done();
    });
  });
  
  it('returns username if name param is a valid user', function(done) {

    superagent.post(url + '/user')
    .send({ name : 'toto', firstname : 'tata' , email : 'toto@toto'})
    .set('Accept', 'application/json')
    .end(function(err, res) {
      var result = JSON.parse(res.text);
      console.log(result);
      assert.ifError(err);
      assert.equal(res.status, status.OK);
    //  assert.equal(result.message, 'Validation failed');

      done();
    });
  });

});
