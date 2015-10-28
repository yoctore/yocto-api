'use strict';

var joi         = require('joi');
var _           = require('lodash');
var logger      = require('yocto-logger');
var express     = require('express');
var fs          = require('fs');
var path        = require('path');

// Define a Joi schema for test if route have a goodformat
var routeJoiSchema = joi.object().keys({
  path            : joi.string().required().min(1).trim(),
  alias           : joi.array().items(joi.string().min(1).trim()),
  model           : joi.string().required().min(1).trim(),
  param           : joi.array().items(joi.string().min(1).trim().allow(
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
  */
  this.models = {};

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
* @param {String} param name of the param to retrieve
* @param {Object} route the current route
* @return {Boolean} If success return true, otherwise false
*/
RouteController.prototype.addRoute = function (pathRequest, nameModel, reqExcluded, param, route,
pathCallback) {

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
  */
  httpMethods.get = function (model, path, param) {

    // Add methode head to the route
    scope.router.get(path, function (req, res) {

      logger.debug('[ ControllerRoutes.get ] - revceiving request,' +
      ' route is : ' + path);

      model.read(req.params[param]).then(function (result) {
        // Send respond to client
        res.status(200).jsonp({
          status  : 'success',
          code    : '200000',
          message : 'Document(s) are found',
          data    : _.isEmpty(result) ? [] : result
        });

      }).catch(function (error) {

        res.status(400).jsonp({
          status  : 'error',
          code    : '400000',
          message : 'An error occured when retrieving document',
          data    : {}
        });

        logger.error('[ ControllerRoutes.patch ] - error : ' + error);
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

      model.delete(req.params[param]).then(function (value) {

        res.status(200).jsonp({
          status  : 'success',
          code    : '200000',
          message : 'The document(s) was deleted',
          data    : {}
        });
      }).catch(function (error) {

        res.status(400).jsonp({
          status  : 'error',
          code    : '400000',
          message : 'An error occured, the document was not deleted',
          data    : {}
        });

        logger.error('[ ControllerRoutes.delete ] - error : ' + error);
      });
    });
  };

  // patch method update only param given
  httpMethods.patch = function (model, path, param) {

    scope.router.patch(path, function (req, res) {

      logger.debug('[ ControllerRoutes.patch ] - revceiving request,' +
      ' route is : ' + path);

      model.update(req.params[param], req.body, 'patch').then(function (value) {

        res.status(200).jsonp({
          status  : 'success',
          code    : '200000',
          message : 'The document(s) was patched',
          data    : {}
        });
      }).catch(function (error) {

        res.status(400).jsonp({
          status  : 'error',
          code    : '400000',
          message : 'An error occured, the document was not updated',
          data    : {}
        });

        logger.error('[ ControllerRoutes.patch ] - error : ' + error);
      });
    });
  };

  // NOTE : vérifier fonctionnement put()
  // put should update the whole object with data given ..
  httpMethods.put = function (model, path, param) {

    scope.router.put(path, function (req, res) {

      logger.debug('[ ControllerRoutes.put ] - revceiving request,' +
      ' route is : ' + path);

      model.update(req.params[param], req.body, 'put').then(function (value) {

        res.status(200).jsonp({
          status  : 'success',
          code    : '200000',
          message : 'The document(s) was updated',
          data    : {}
        });
      }).catch(function (error) {

        res.status(400).jsonp({
          status  : 'error',
          code    : '400000',
          message : 'An error occured, the document was not updated',
          data    : {}
        });

        logger.error('[ ControllerRoutes.put ] - error : ' + error);
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
  httpMethods.post = function (model, path) {

    // Add methode post to the route
    scope.router.post(path, function (req, res) {

      logger.debug('[ ControllerRoutes.post ] - revceiving request, route is : ' + path);

      // NOTE : effectuer pour détérminer si une fonction override le create ???
      model.create(req.body).then(function (value) {

        // Objet created
        res.status(200).jsonp({
          status  : 'success',
          code    : '200000',
          message : 'The document(s) was created',
          data    : value
        });
      }).catch(function (error) {

        // Error creating object
        res.status(400).jsonp({
          status  : 'error',
          code    : '400000',
          message : 'An error occured, the document was not created',
          data    : {}
        });

        logger.error('[ ControllerRoutes.post ] - error : ' + error);
      });
    });
  };

  // retrieve the model
  var model = scope.models.db.getModel(nameModel);

  // check if model is not false
  if (model) {
    logger.debug('[ ControllerRoutes.addRoute ] - adding new route, path : ' + pathRequest);

    // Handle wich requests are implemented
    // Retrieve the difference betwenn ALL_HTTP_REQUESTS and all requests excluded
    _.each(_.difference(scope.ALL_HTTP_REQUESTS, reqExcluded), function (fn) {

      // Bind routes to model
      httpMethods[fn](model, pathRequest, param, fn);
    }, this);

    // retrieve specifiq route in model
    _.each(route.methods, function (method) {

      try {
        var pathSubReq = path.normalize(pathRequest + '/' + method.path);

        // Load corresponded callback file to retrieve function
        var callbackFile = require(path.normalize(pathCallback + nameModel.toLowerCase() + '.js'));

        if (!_.isUndefined(callbackFile[method.fn])) {

          // Bind method to the route
          scope.router[method.method](pathSubReq, function (req, res, next) {
            callbackFile[method.fn](req, res, next, model);
          });

        } else {
          throw ' Function \'' + method.fn + '\' not found';
        }

      } catch (e) {
        logger.error('[ ControllerRoutes.addRoute ] - can\'t add specifiq route : \'' +
        method.sync + '\' for model : \'' + nameModel + '\', more details : ' + e);
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
RouteController.prototype.init = function (pathRoutes, ecrmDatabase, pathCallback) {

  logger.debug('[ ControllerRoutes.init ] - start');

  var routes = {};

  // test if the two params are string and not empty
  if (!_.isString(pathRoutes) || !_.isString(pathCallback) ||
  _.isEmpty(pathRoutes) || _.isEmpty(pathCallback)) {
    return false;
  }

  // Test if the config files exist and retrive routes files
  try {

    // Use fs.accessSync in try/catch because fs.accessSync throw an exception if one file doesn't exist
    fs.accessSync(pathRoutes);

    // Load route config file
    routes = JSON.parse(fs.readFileSync(pathRoutes, 'utf-8'));
  } catch (e) {
    logger.error('[ ControllerRoutes.init ] - error during loading files, more details : ' + e);
    return false;
  }

  this.models = ecrmDatabase;
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
        this.addRoute(val, route.model, route.excluded, route.param, route, pathCallback);
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
