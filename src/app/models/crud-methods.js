'use strict';

var _           = require('lodash');
var Promise     = require('promise');

/**
* Yocto API : crud methods Controller
*
* Controller that give default methods
*
* For more details on these dependencies read links below :
* - LodAsh : https://lodash.com/
*
* @date : 22/09/2015
* @author : Cedric Balard <cedric@yocto.re>
* @copyright : Yocto SAS, All right reserved
* @class Crud
*/

/**
* List of all default property in a mongodb document <br>
* This list define all property that we don't want retrive
*
* @property DEFAULT_PROP_MONGODB
* @type array
* @default [ '__v', '_id']
*/
var DEFAULT_PROP_MONGODB = [ '__v', '_id' ];

function Crud () {

  /**
  * Object that contains the current model
  *
  * @property tabModel
  * @type Array of Object
  * @default empty
  */
  this.model = {};
}

/**
 * [get description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
Crud.prototype.get = function (id) {

  // Save scope
  var scope = this;

  // Determine if paramToGet is not empty, and get good function name. If is empty, find all documents
  var fn = 'find';

  if (!_.isUndefined(id) && _.isString(id)) {
    fn = 'findById';
  } else if (!_.isUndefined(id) && _.isObject(id)) {
    fn = 'findOne';
  }

  return new Promise (function (fulfill, reject) {
    // Find object
  //  console.log(' INTO PROMISE ID = ', id);
    scope.model[fn]((!_.isUndefined(id) ? id : ''), function (err, val) {
      if (err) {
        reject(err);
      } else {
        fulfill(val);
      }
    });
  });
};

/**
 * [delete description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
Crud.prototype.delete = function (id) {

  // Save scope
  var scope = this;

  return new Promise (function (fulfill, reject) {

    // Find object
    scope.model.remove({ _id : id }, function (err, val) {
      if (err) {
        reject(err);
      } else {
        fulfill(val);
      }
    });
  });
};

/**
 * [create description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
Crud.prototype.create = function (data) {

  // Save scope
  var scope = this;

  return new Promise (function (fulfill, reject) {
    var obj = new scope.model();

    // Retrieve all property of the object in the current model, and omit default property of mongodb
    _.each(_.omit(scope.model.schema.paths, DEFAULT_PROP_MONGODB), function (val, key) {

      // Add the propriety to the new object
      obj[key] = data[key];
    });

    obj.save(function (err, val) {
      if (err) {
        reject(err);
      } else {
        fulfill(val);
      }
    });
  });
};

/**
 * [update description]
 * @param  {[type]} id     [description]
 * @param  {[type]} data   [description]
 * @param  {[type]} method [description]
 * @return {[type]}        [description]
 */
Crud.prototype.update = function (id, data, method) {

  // Save scope
  var scope = this;

  return new Promise (function (fulfill, reject) {

    // Find in database
    scope.model.findById(id, function (err, objFound) {

      if (err) {
        reject(err);
      } else {

        // Retrieve all property of the object in the current model, and omit default property of mongodb
        _.each(_.omit(scope.model.schema.paths, DEFAULT_PROP_MONGODB) , function (val, key) {

          // Check if it's an PUT request, if it's an PATCH request and the val is empty we don't set it
          if ((method === 'patch' && !_.isUndefined(data[key])) || method === 'put') {

            // Set value to save object later on db
            objFound[key] = data[key];
          }
        });

        objFound.save(function (err, val) {
          if (err) reject(err);
          else fulfill(val);
        });
      }
    });
  });
};

/**
 * Initialise object, set model
 *
 * @param  {Object} model the Mongoose Model
 */
Crud.prototype.init = function (model) {
  this.model = model;
};

module.exports = new (Crud) ();
