'use strict';

var joi         = require('joi');
var _           = require('lodash');
var logger      = require('yocto-logger');
var express     = require('express');
var models      = require('../models/controller.js');
var fs          = require('fs');
var path        = require('path');
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

// Define a Joi schema for test if route have a goodformat
var routeJoiSchema = joi.object().keys({
  path            : joi.string().required().min(1).trim(),
  alias           : joi.array().items(joi.string().min(1).trim()),
  model           : joi.string().required().min(1).trim(),
  paramToRetrieve : joi.array().items(joi.string().min(1).trim().allow(
    'post', 'get', 'put', 'patch', 'delete', 'head')),
  excluded        : joi.array().items(joi.string().min(1).trim()),
  methods         : joi.array().items(
    joi.object().keys({
      method : joi.string().required().allow('post', 'get', 'put', 'patch', 'delete', 'head'),
      path   : joi.string().required().min(1),
      fn     : joi.string().required().min(1)
    }))
});

/**
* Yocto API : Routes Controller
*
* Controller of routes based on Express
*
* It read a jsonfile and create each routenode
*
* Cors Express is enable to permit test with apidocjs
*
* For more details on these dependencies read links below :
* - LodAsh : https://lodash.com/
* - yocto-logger : git+ssh://lab.yocto.digital:yocto-node-modules/yocto-utils.git
* - express : http://expressjs.com/
* - joi : https://github.com/hapijs/joi
*
* @date : 11/05/2015
* @author : Cedric Balard <cedric@yocto.re>
* @copyright : Yocto SAS, All right reserved
* @class RouteController
*/
function RouteController () {
  /**
  * List of all http request that supported by api
  *
  * @property ALL_HTTP_REQUESTS
  * @type Array of String
  * @default [ 'post', 'get', 'put', 'patch', 'delete', 'head']
  */
  this.ALL_HTTP_REQUESTS = [ 'post', 'get', 'put', 'patch', 'delete', 'head' ];

  /**
  * Model's Controller, is the controller that will use to retrieve a model
  *
  * @property models
  * @type Object
  * @default require '../models/controller.js'
  */
  this.models = models;

  /**
  * The main router
  *
  * @property router
  * @type Object
  */
  this.router = express();

  /**
  * The main logger
  *
  * @property logger
  * @type Object
  */
  this.logger = logger;
}

/**
* Add a route to the main router
*
* @method addRoute
* @param {String} pathRequest route to add
* @param {String} nameModel name of the model object to retrieve into the controller of model
* @param {Array} reqExcluded array of excluded request
* @param {String} paramToRetrieve name of the param to retrieve
* @param {Object} theRoute the current route
* @return {Boolean} If success return true, otherwise false
*/
RouteController.prototype.addRoute = function (pathRequest, nameModel, reqExcluded, paramToRetrieve, theRoute) {

  // Save scope
  var scope = this;

  var httpMethods = {};

  logger.debug('[ ControllerRoutes.addRoute ] - new route found, path : ' + pathRequest);

  /**
  * Implement the http request : GET and HEAD</br>
  * Get an object </br>
  * Send a error to the client if the request failed, or a json file to the client with the data requested if it's an GET requerst </br>
  * OR if it's a head request, send a http header
  *
  * @method addHTTPRequestGets
  * @param  {Object} model the data model object
  * @param  {String} path the root path
  * @param  {String} param The property to retrieve on url
  * @param  {String} reqType type of the http req (get or head)
  */
  httpMethods.get = function (model, path, param) {

    // Add methode head to the route
    scope.router.get(path, function (req, res) {

      logger.debug('[ ControllerRoutes.get ] - revceiving request,' +
      ' route is : ' + path);

      model.schema.methods.crud.get(req.params[param]).then(function (result) {
        // Send respond to client
        res.status(200).jsonp({
          status  : "success",
          code    : "200000",
          message : "Default GET method",
          data    : _.isEmpty(result) ? [] : result
        });

      }).catch(function (err) {

        res.status(400).jsonp({
          status  : "error",
          code    : "400000",
          message : "Default GET method, error geting object",
          data    : err
        });
      });
    });
  };

  httpMethods.head = function (model, path, param, method) {

    httpMethods.get(model, path, param, method);

  };

  // Is for delete methods
  httpMethods.delete = function (model, path, param) {

    // Add methode update to the route
    scope.router.delete(path, function (req, res) {

      logger.debug('[ ControllerRoutes.delete ] - revceiving request,' +
      ' route is : ' + path);

      model.schema.methods.crud.delete(req.params[param]).then(function (value) {

        res.status(200).jsonp({
          status  : "success",
          code    : "200000",
          message : "Default DELETE method",
          data    : value + ' document(s) was deleted'
        });
      }).catch(function (err) {

        res.status(400).jsonp({
          status  : "error",
          code    : "400000",
          message : "Default DELETE method, error delete object",
          data    : err
        });
      });
    });
  };

  httpMethods.patch = function (model, path, param) {

    scope.router.patch(path, function (req, res) {

      logger.debug('[ ControllerRoutes.patch ] - revceiving request,' +
      ' route is : ' + path);

      model.schema.methods.crud.update(req.params[param], req.body, 'patch').then(function (value) {

        res.status(200).jsonp({
          status  : "success",
          code    : "200000",
          message : "Default PATCH method",
          data    : value + ' document(s) was modified'
        });
      }).catch(function (err) {

        res.status(400).jsonp({
          status  : "error",
          code    : "400000",
          message : "Default PATCH method, error modifing object",
          data    : err
        });
      });
    });
  };

  httpMethods.put = function (model, path, param) {

    scope.router.put(path, function (req, res) {

      logger.debug('[ ControllerRoutes.put ] - revceiving request,' +
      ' route is : ' + path);

      model.schema.methods.crud.update(req.params[param], req.body, 'put').then(function (value) {

        res.status(200).jsonp({
          status  : "success",
          code    : "200000",
          message : "Default PUT method",
          data    : value + ' document(s) was modified'
        });
      }).catch(function (err) {

        res.status(400).jsonp({
          status  : "error",
          code    : "400000",
          message : "Default PUT method, error modifing object",
          data    : err
        });
      });
    });
  };

  /**
  * Implement the http request : POST </br>
  * Add a new Object in DB </br>
  * Send a error to the client if the request failed, otherwise a json file to the client with the data
  *
  * @method post
  * @param  {Object} Model the data model object (Model start with an uppercase for jshint validation)
  * @param  {String} path The root path of model
  */
  httpMethods.post = function (Model, path) {

    // Add methode post to the route
    scope.router.post(path, function (req, res) {

      logger.debug('[ ControllerRoutes.post ] - revceiving request, route is : ' + path);

      // TODO : ajouter validation JOI_SCHEMA
      Model.schema.methods.crud.create(req.body).then(function (value){

        // Objet created
        res.status(200).jsonp({
          status  : "success",
          code    : "200000",
          message : "Default POST method, object created in data",
          data    : value
        });
      }).catch(function (err) {

        // Error creating object
        res.status(400).jsonp({
          status  : "error",
          code    : "400000",
          message : "Default POST method, error creating object",
          data    : err
        });
      });
    });
  };

  // retrieve the model
  var model = scope.models.getModel(nameModel);

  // check if model is not false
  if (model) {
    logger.debug('[ ControllerRoutes.addRoute ] - adding new route, path : ' + pathRequest);

    // Handle wich requests are implemented
    // Retrieve the difference betwenn ALL_HTTP_REQUESTS and all requests excluded
    _.each(_.difference(scope.ALL_HTTP_REQUESTS, reqExcluded), function (fn) {

      // Bind routes to model
      httpMethods[fn](model, pathRequest, paramToRetrieve, fn);
    }, this);

    // retrieve specifiq route in model
    _.each(theRoute.methods, function (method) {

      try {
        var pathSubReq = path.normalize(pathRequest + '/' + method.path);

        if (!_.isUndefined(model.schema.methods[method.fn])) {

          // Bing method to the route
          scope.router[method.method](pathSubReq, function (req, res, next) {
            model.schema.methods[method.fn](req, res, next, model, models);
          });
        } else {
          throw ' Function \'' + method.fn + '\' not found';
        }

      } catch (e) {
        logger.error('[ ControllerRoutes.addRoute ] - can\'t add specifiq route : \'' +
        method.sync + '\' , more details : ' + e);
      }
    });

    return true;
  }
  logger.error('[ ControllerRoutes.addRoute ] - can\'t add route : \'' +
  pathRequest + '\' ,because model is not defined');
  return false;
};

/**
* Initialise the controller </br>
* Retrieve all routes and thoose alias and add there into router
*
* @method init
* @param {String} pathRoutes the path of the file route.json
* @param {String} pathModels the path of folder that contains all models.json
* @return {Boolean} If success return true, otherwise false
*/
RouteController.prototype.init = function (pathRoutes, pathModels) {

  var scope = this;
  logger.debug('[ ControllerRoutes.init ] - start');

  /**
  * Add a middleware that enables CORS for all routes
  *
  * @method addMidlleware
  */
   var addMidlleware = function () {

    // TODO : tester si cors() résou le probleme
    scope.router.use(function (req, res, next) {

      // Enable exoress CORS
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

      // make sure we go to the next routes and don't stop here
      next();
    });
  };

  var routes = {};

  // test if the two params are string and not empty
  if (!_.isString(pathRoutes) || !_.isString(pathModels) ||
  _.isEmpty(pathRoutes) || _.isEmpty(pathModels)) {
    return false;
  }

  // Test if the config files exist and retrive routes files
  try {

    // Use fs.accessSync in try/catch because fs.accessSync throw an exception if one file doesn't exist
    fs.accessSync(pathRoutes);
    fs.accessSync(pathModels);

    // Load route config file
    routes = JSON.parse(fs.readFileSync(pathRoutes, 'utf-8'));
  } catch (e) {
    logger.error('[ ControllerRoutes.init ] - error during loading files, more details : ' + e);
    return false;
  }

  // Init models Controller
  this.models.init(pathModels);

  // Ass middleware
  addMidlleware();

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
        this.addRoute(val, route.model, route.excluded, route.paramToRetrieve, route);
      }, this);

    } else {
      logger.error('[ ControllerRoutes.init ] - Joi Validation failed ; error when trying to add ' +
      'a new route, please check the file : \'routes.json\'');

      // log each error
      _.each(result.error.details, function (val) {

        logger.warning('[ ControllerRoutes.init ] - ' + val.message + ' at ' + val.path);
      });
    }
  }, this);

  return true;
};

/**
* Export current Controller to use it on node
*/
module.exports = new (RouteController)();
