'use strict';

/**
 * Service that get all account
 *
 * @param  {Object}   req    Default object request of express
 * @param  {Object}   res    Default object response of express
 */
exports.test1 = function (req, res) {
  this.model.test1().then(
  function (value) {
    // call orika method to set an order
    this.end.success.apply(this, [ {
      response  : {
        category  : 200,
        data      : {
          capacity : value
        }
      }
    }, req, res]);
  }.bind(this)).catch(function (error) {
    this.end.fail.apply(this, [ {
      response  : {
        category  : 400,
        code      : 804
      }
    }, req, res]);
  }.bind(this));
};
