'use strict';

/**
 * Main end point of the api when a service success
 *
 * @param  {Object} data object all needed data
 * @param  {Object} req  default request from expressjs
 * @param  {Object} res  default response from expressjs
 */
exports.success = function (data, req, res) {

  console.log('success endPoints')
  // send response to client
  res.jsonp(data);
};

/**
 * End point of the api when a Service fail
 *
 * @param  {Object} data object all needed data
 * @param  {Object} req  default request from expressjs
 * @param  {Object} res  default response from expressjs
 */
exports.fail = function (data, req, res) {

  console.log('fail endPoints')
  // send response to client
  res.jsonp(data);
};
