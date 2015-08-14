'use strict';

var joi         = require('joi');
var _           = require('lodash');
var logger      = require('yocto-logger');
var express     = require('express');
var models      = require('../models/controller.js');
var fs          = require('fs');
var isObjectiId    = require('mongoose').Types.ObjectId;

/**
* List of all default property in a mongodb document
*yoct
* @property {Array} DEFAULT_PROP_MONGODB
* @default [ '__v', '_id']
*/
var DEFAULT_PROP_MONGODB = [ '__v', '_id' ];

// Define a Joi schema for test if route have a goodformat
var routeJoiSchema = joi.object().keys({
  path            : joi.string().required().min(1).trim(),
  alias           : joi.array().items(joi.string().min(1).trim()),
  model           : joi.string().required().min(1).trim(),
  paramToRetrieve : joi.array().items(joi.string().min(1).trim()),
  requestExcluded : joi.array().items(joi.string().min(1).trim())
});

/**
* Yocto API : Routes Controller
*
* Controller of routes based on Express
*
* It read a jsonfile and create each route
*
* Cors Express is enable to permit test with apidocjs
*
* For more details on these dependencies read links below :
* - LodAsh : https://lodash.com/
* - yocto-logger : git+ssh://lab.yocto.digital:yocto-node-modules/yocto-utils.git
* - express : http://expressjs.com/
* - joi : https://github.com/hapijs/joi#array
*
* @date : 11/05/2015
* @author : Cedric Balard <cedric@yocto.re>
* @copyright : Yocto SAS, All right reserved
* @class
*/
function Controller () {

  /**
  * List of all http request
  *
  * @property {Array} ALL_HTTP_REQUESTS
  * @default [ 'post', 'get', 'put', 'patch', 'delete', 'head']
  */
  this.ALL_HTTP_REQUESTS = [ 'post', 'get', 'put', 'patch', 'delete', 'head' ];

  /**
  * Model's Controller, is the controller that will use to retrieve a model
  *
  * @property {Object} models
  * @default require '../models/controller.js'
  */
  this.models = models;

  /**
  * The main router
  *
  * @property {Object} router
  * @default require '../models/controller.js'
  */
  this.router = express();

  /**
  * The main logger
  *
  * @property {Object} logger
  */
  this.logger = logger;

  /**
  * Test if string is defined </br>
  * Used to dertermine if we call find() or findById()
  *
  * @method getFn
  * @param {Object} varToTest the var to test
  * @return {String} return 'find' if varToTest is undefined, otherwise 'findById'
  */
  this.getFunctionName = function (varToTest) {

    if (_.isUndefined(varToTest)) {
      return 'find';
    }
    return 'findById';
  };

  /**
  * Implement the http request : GET and HEAD</br>
  * Get an object </br>
  * Send a error to the client if the request failed, or a json file to the client with the data requested if it's an GET requerst </br>
  * OR if it's a head request, send a http header
  *
  * @method get
  * @param  {Object} model the data model object
  * @param  {String} path the root path
  * @param  {String} paramToGet The property to retrieve on url
  * @param  {String} reqType type of the http req (get or head)
  */
  this.addHTTPRequestGets = function (model, path, paramToGet, reqType) {

    // Determine if paramToGet is not empty, and get good function name
    var fn = this.getFunctionName(paramToGet);

    // Add methode head to the route
    this.router[reqType](path, function (req, res) {

      logger.info('[ ControllerRoutes.addHTTPRequest ] - revceiving ' + reqType + ' request,' +
      ' route is : ' + path);

      // Find object
      model[fn](req.params[paramToGet], function (err, val) {

        // Default response to head request
        var objToSend = {
          code    : 200,
          content : { success : 'OK' }
        };

        if (err) {
          objToSend = {
            code    : 400,
            content : { error : 'error ' + err }
          };
        } else if (_.isEmpty(val)) {
          // Force to [] because by default is null
          objToSend = {
            code     : 200,
            content  : []
          };
        } else if (reqType === 'get') {
          objToSend = {
            code     : 200,
            content  : val
          };
        }

        // Send respond to client
        res.status(objToSend.code).jsonp(objToSend.content);
      });
    });
  };

  /**
  * Implement the http request : PUT, PATCH and DELETE</br>
  * Get an object </br>
  * send a message to the client
  *
  * @method get
  * @param  {Object} model the data model object
  * @param  {String} path the root path
  * @param  {String} paramToGet The property to retrieve on url
  * @param  {String} reqType type of the http req (put, patch or head)
  */
  this.addHTTPRequest = function (model, path, paramToGet, reqType) {

    // Save the scope
    var scope = this;

    // Add methode update to the route
    this.router[reqType](path, function (req, res) {

      logger.info('[ ControllerRoutes.addHTTPRequest ] - revceiving ' + reqType + ' request,' +
      ' route is : ' + path);

      if (!_.isEmpty(paramToGet)) {
        // determine wich cb should be called
        if (reqType === 'delete') {
          scope.deleteObject(model, res, req, paramToGet);
          return;
        }
        scope.updateObject(model, res, req, paramToGet, scope, reqType);
        return;
      }

      // Send an error response
      res.status(400).jsonp({ error : 'Id is not define' });
    });
  };

  /**
  * Update the model, it's used for : PUT and PATCH
  * Get an object </br>
  * send a message to the client
  *
  * @method get
  * @param  {Object} model the data model object
  * @param  {Object} res the http response
  * @param  {Object} req the http request
  * @param  {String} paramToGet The property to retrieve on url
  */
  this.updateObject = function (model, res, req, paramToGet, scope, reqType) {
    // Find
    model.findById(req.params[paramToGet], function (err, value) {

      var updateObject = false;
      var errorType = [];

      // Default response
      var objToSend = {
        code    : 204,
        content : { success : 'No documents found to update' }
      };

      if (err) {
        objToSend = {
          code    : 400,
          content : { error : err }
        };
      } else {
        updateObject = true;
        // Retrieve all property of the object in the current model, and omit default property of mongodb
        _.each(_.omit(model.schema.paths, DEFAULT_PROP_MONGODB) , function (val, key) {

          // Check if it's an PUT request, if it's an PATCH request and the val is empty we don't set it
          if ((reqType === 'patch' && !_.isUndefined(req.body[key])) || reqType === 'put') {

            // Set value to save object later on db
            value[key] = req.body[key];
          }

          // Compare data in object with model to check if it's the good type
          if (!_.isUndefined(req.body[key]) && !scope.checkTypeValidation(val, req.body[key])) {

            // Add error in an array to send to client
            errorType.push(' ' + key + ' should be a : ' +
            (_.isArray(val.options.type) ? '[' + val.options.type + ']' : val.options.type));
          }
        });
      }

      // Save object in db
      if (errorType.length > 0) {
        updateObject = false;
        objToSend = {
          code    : 400,
          content : { error : 'Error type validation for ' + errorType.length +
          ' key, more details : ' + errorType }
        };
      }

      if (updateObject) {
        scope.saveObject(value, res);
        return;
      }

      // Send respond to client
      res.status(objToSend.code).jsonp(objToSend.content);
    });
  };

  /**
  * delete the model, it's used for : DELETE </br>
  * Delete an object </br>
  * Send a error to the client if the request failed, otherwise a json file to the client with the data
  *
  * @method delete
  * @param  {Object} model the data model object
  * @param  {Object} res the http response
  * @param  {Object} req the http request
  * @param  {String} paramToGet The property to retrieve on url to delete the object
  */
  this.deleteObject = function (model, res, req, paramToGet) {

    // remove the object and check for errors
    model.remove({ _id : req.params[paramToGet] }, function (err, val) {

      // Default response
      var objToSend = {
        code    : 400,
        content : { error : err }
      };

      if (!err) {
        objToSend = {
          code    : 200,
          content : { success : val + ' document(s) was deleted' }
        };
      }

      // Send response to client
      res.status(objToSend.code).jsonp(objToSend.content);
    });
  };

  /**
  * Save an object in db, it's used for : PUT, PATCH and POST </br>
  * Send a error to the client if the request failed, otherwise a json file to the client with the data
  *
  * @method saveObject
  * @param  {Object} obj the data model object
  * @param  {Object} res the http response
  */
  this.saveObject = function (obj, res) {

    // save the object and check for errors
    obj.save(function (err) {

      // Default response
      var objToSend = {
        code    : 400,
        content : { error : err }
      };

      if (!err) {
        objToSend = {
          code    : 200,
          content : { success : 'Operation success' }
        };
      }

      // Send response to client
      res.status(objToSend.code).jsonp(objToSend.content);
    });
  };

  /**
  * Implement the http request : POST </br>
  * Add a new Object in DB </br>
  * Send a error to the client if the request failed, otherwise a json file to the client with the data
  *
  * @method post
  * @param  {Object} Model the data model object (Model start with an uppercase for jshint validation)
  * @param  {String} path the root path
  */
  this.post = function (Model, path) {

    // Save the scope
    var scope = this;

    // Add methode post to the route
    this.router.post(path, function (req, res) {

      logger.debug('[ ControllerRoutes.post ] - revceiving request, route is : ' + path);

      // Create a instance of model, used to save in db
      var obj                   = new Model();
      var errorType             = [];

      // Retrieve all property of the object in the current model, and omit default property of mongodb
      _.each(_.omit(Model.schema.paths, DEFAULT_PROP_MONGODB), function (val, key) {

        // Compare data in object with model to check if it's the good type
        if (!_.isUndefined(req.body[key]) && !scope.checkTypeValidation(val, req.body[key])) {
          errorType.push(' ' + key + ' should be a ' +
          (_.isArray(val.options.type) ? '[' + val.options.type + ']' : val.options.type));
        }

        // Add the propriety to the new object
        obj[key] = req.body[key];
      });

      // Save object in db
      if (_.isEmpty(errorType)) {
        scope.saveObject(obj, res);
        return;
      }

      // Send respond to client
      res.status(400).jsonp({ error : 'Error type validation for ' + errorType.length +
      ' key, more details : ' + errorType });
    });
  };

  /**
  * Compare data in object with model to check if it's the good type
  *
  * @method checkTypeValidation
  * @param {Object} val the mongoose model
  * @param {Object} param the param to compare
  * @return {Boolean} to success
  */
  this.checkTypeValidation = function (val, param) {

    // Add a validation step for model
    var typeOfParam = this.getTypeParam(param);
    // Test is is string
    if (_.isString(val.options.type) && typeOfParam === val.options.type.toLowerCase()) {
      return true;
    } else if (_.isArray(val.options.type) && typeOfParam === 'array') {
      // test the other type
      var succes = true;

      // Test each value in array
      _.each(param, function (tmp) {

        // Retrieve required type
        var typeRequired = _.isUndefined(val.options.type[0].type) ?
        val.options.type[0].toLowerCase() :
        val.options.type[0].type.toLowerCase();

        // add specific test for string, because an object id is a string too.
        if (this.getTypeParam(tmp) !== typeRequired &&
        (typeRequired === 'string' && this.getTypeParam(tmp) === 'string')) {
          succes = false;
          return false;
        }
      }, this);

      if (succes) {
        return true;
      }
    }
    return false;
  };

  /**
  *
  * @method getTypeParam
  * @param  {Object} param the param to get the type
  */
  this.getTypeParam = function (param) {
    if (_.isArray(param)) {
      return 'array';
    }

    // test parse object to determine his type
    try {
      param = JSON.parse(param);

      if (_.isArray(param)) {
        return 'array';
      } else if (_.isString(param)) {
        return 'string';
      } else if (_.isObject(param)) {
        return 'object';
      } else if (_.isNumber(param)) {
        return 'number';
      }
    } catch (e) {
    }

    // If parse failed, test if param is not a objectid
    try {
      isObjectiId(param);

      return 'objectid';
    } catch (e) {
      return 'string';
    }
  };

  /**
  * Add a route to the main router
  *
  * @method addRoute
  * @param {String} path route to add
  * @param {String} nameModel name of the model object to retrieve into the controller of model
  * @param {Array} reqExcluded array of excluded request
  * @param {String} paramToRetrieve name of the param to retrieve
  */
  this.addRoute = function (path, nameModel, reqExcluded, paramToRetrieve) {

    logger.info('[ ControllerRoutes.addRoute ] - new route found, path : ' + path);

    // retrieve the model
    var model = this.models.getModel(nameModel);

    // check if model is not false
    if (model !== false) {
      logger.info('[ ControllerRoutes.addRoute ] - adding new route, path : ' + path);

      // Handle wich requests are implemented
      // Retrieve the difference betwenn ALL_HTTP_REQUESTS and all requests excluded
      _.each(_.difference(this.ALL_HTTP_REQUESTS, reqExcluded), function (fn) {

        if (fn === 'patch' || fn === 'put' || fn === 'delete') {

          // add request
          this.addHTTPRequest(model, path, paramToRetrieve, fn);
        } else if (fn === 'get' || fn === 'head') {

          // add request
          this.addHTTPRequestGets(model, path, paramToRetrieve, fn);
        } else {

          // Call function by his name  ( POST request)
          this[fn](model, path, paramToRetrieve);
        }
      }, this);
      return true;
    }
    logger.warning('[ ControllerRoutes.addRoute ] - can\'t add route : \'' +
    path + '\' ,because model is not defined');
    return false;
  };

  /**
  * Add a middleware
  *
  * @method addMidlleware
  */
  this.addMidlleware = function () {

    this.router.use(function (req, res, next) {

      logger.debug('[ ControllerRoutes.Middleware ] - incoming request');

      // Enable exoress CORS
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

      // Read all property of the request and delete all property that have an empty value
      _.each(req.body, function (value, key) {

        if (_.isEmpty(value)) {
          delete req.body[key];
        }
      });

      next(); // make sure we go to the next routes and don't stop here
    });
  };
}

/**
* Initialise the controller </br>
* Retrieve all routes and thoose alias and add there into router
*
* @method init
*/
Controller.prototype.init = function (pathRoutes, pathModels) {
  logger.debug('[ ControllerRoutes.init ] - start');

  // test if string
  if (!_.isString(pathRoutes) || !_.isString(pathModels)) {
    return false;
  }

  var routes = {};

  // Test if file exist and retrive routes file
  try {
    fs.accessSync(pathRoutes);
    fs.accessSync(pathModels);
    routes = JSON.parse(fs.readFileSync(pathRoutes, 'utf-8'));
  } catch (e) {
    logger.error('[ ControllerRoutes.init ] - error during loading files, more details : ' + e);
    return false;
  }

  // Init models Controller
  this.models.init(pathModels);

  // Ass middleware
  this.addMidlleware();

  // read json file and add each routes
  _.each(routes.routes, function (route) {

    // Execute the joi vailidation
    var result = routeJoiSchema.validate(route);

    // Check if have no error in joi validation
    if (_.isEmpty(result) || _.isEmpty(result.error)) {

      // create a array that contains the main route, and all thoose aliases
      var routeAndAlias = [];
      routeAndAlias.push(route.path);

      // Add alias if exists
      if (!_.isEmpty(route.alias)) {
        routeAndAlias.push(route.alias);
        routeAndAlias = _.flatten(routeAndAlias);
      }

      // add Main route
      _.each(routeAndAlias, function (val) {
        this.addRoute(val, route.model, route.requestExcluded, route.paramToRetrieve);
      }, this);

    } else {
      logger.error('[ ControllerRoutes.init ] - error when trying to add a new route,' +
      ' please check the file : \'routes.json\'');

      // log each error
      _.forEach(result.error.details, function (val) {

        logger.warning('[ ControllerRoutes.init ] - ' + val.message + ' at ' + val.path);
      });
    }
  }, this);

  return true;
};

/**
* Export current Controller to use it on node
*/
module.exports = new (Controller)();
