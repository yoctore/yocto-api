'use strict';

var _           = require('lodash');
var Promise     = require('promise');

/**
* List of all default property in a mongodb document <br>
* This list define all property that we don't want retrive
*
* @property DEFAULT_PROP_MONGODB
* @type array
* @default [ '__v', '_id']
*/
var DEFAULT_PROP_MONGODB = [ '__v', '_id' ];

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
function Crud () {

  /**
  * Object that contains the current model
  *
  * @property model
  * @type Object
  * @default empty
  */
  this.model = {};
}

/**
* Function that get element in db
*
* @method get
* @param  {Objet, String} id THe id or antoher object to Retrieve in db
* @return {Function} return a promise
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
* Delete an object in db
*
* @method delete
* @param  {String} id the id of the item should be delete
* @return {Function} return a promise
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
* Create an object in db
*
* @method create
* @param  {Object} data the data to create object
* @return {Function} return a promise
*/
Crud.prototype.create = function (data) {

  // Save scope
  var scope = this;

  return new Promise (function (fulfill, reject) {
    var obj = new scope.model();

    // Check if validateObject is define, and execute a joi validation for the current object
     var result = !_.isUndefined(scope.model.schema.methods.validateObject) ?
     scope.model.schema.methods.validateObject(data) : {};

    // If validation success or function validateObject is not define, add object in db
    if (_.isEmpty(result.error)) {

      // Retrieve all property of the object in the current model, and omit default property of mongodb
      _.each(_.omit(scope.model.schema.paths, DEFAULT_PROP_MONGODB), function (val, key) {

        // Add the propriety to the new object
        obj[key] = data[key];
      });

      // Save obj in db
      obj.save(function (err, val) {
        if (err) {
          reject(err);
        } else {
          fulfill(val);
        }
      });
    } else {
      
      // Joi validation failed, so return the errors
      reject(result.error);
    }
  });
};

/**
* Update an object in db
*
* @method update
* @param  {String} id the id of object
* @param  {Object} data the new data
* @param  {String} method the http method that use this function (PUT or PATCH)
* @return {Function} return a promise
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

module.exports = (Crud);
