'use strict';

/**
 * Service that get all account
 *
 * @param  {Object}   req    Default object request of express
 * @param  {Object}   res    Default object response of express
 */
exports.getAll = function (req, res) {

  this.model.get({}).then(function (value) {
    res.jsonp(value);
  }).catch(function (error) {
    res.jsonp(error);
  });
};
