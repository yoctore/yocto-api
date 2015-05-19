'use strict';

var joi         = require('joi');
var _           = require('lodash');
var logger      = require('yocto-logger');
var express     = require('express');
var models      = require('../models/controller.js');
var dm          = require('../defaultMessage.js');
var routes      = require('./routes.json');

/**
* List of all default property in a mongodb document
*
* @property {Array} DEFAULT_PROP_MONGODB
* @default [ '__v', '_id']
*/
var DEFAULT_PROP_MONGODB = [ '__v', '_id' ];

//Define a Joi schema for test if route have a goodformat
var routeJoiSchema = joi.object().keys({
  path : joi.string().required(),
  alias : joi.array().items(joi.string()),
  model : joi.string().required(),
  paramToRetrieve : joi.string(),
  requestExcluded : joi.array().items(joi.string())
});

/**
* Yocto API : Routes Controller
*
* Controller of routes based on Express
*
* It read a jsonfile and create each route
*
* For more details on these dependencies read links below :
* - LodAsh : https://lodash.com/
* - yocto-logger : git+ssh://lab.yocto.digital:yocto-node-modules/yocto-utils.git
* - express : http://expressjs.com/
* - joi : https://github.com/hapijs/joi#array
*
*
* @date : 11/05/2015
* @author : Cedric Balard <cedric@yocto.re>
* @copyright : Yocto SAS, All right reserved
* @class ControllerRoutes
*/
function Controller() {

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

}

/**
* Test if string is defined </br>
* Used to dertermine if we call find() or findById()
*
* @method getFn
* @param {Object} varToTest the var to test
* @return {String} return 'find' if varToTest is undefined, otherwise 'findById'
*/
Controller.prototype.getFn = function(varToTest) {

  if (_.isUndefined(varToTest)) {
    return 'find';
  }
  return 'findById';
};

/**
* Implement the http request : GET </br>
* Get an object </br>
* Send a error to the client if the request failed, otherwise a json file to the client with the data requested
*
* @method get
* @param  {Object} model the data model object
* @param  {String} path the root path
* @param  {String} paramToGet The property to retrieve on url
*/
Controller.prototype.get = function(model, path, paramToGet) {
  // Determine if paramToGet is not empty, and get good function name
  var fn = this.getFn(paramToGet);

  // Add methode get to the route
  this.router.get(path, function(req, res) {

    logger.info('[ ControllerRoutes.get ] - revceiving request, route is : ' + path);

    //Find
    model[fn](req.params[paramToGet], function(err, val) {

      if (err) {
        res.send(err);
      }

      //Succes so Send a jsonfile
      res.json(val);
    });
  });
};

/**
* Implement the http request : HEAD </br>
* Get a head of object </br>
* Send a error to the client if the request failed, otherwise a header will be sent
*
* @method head
* @param  {Object} model the data model object
* @param  {String} path the root path
* @param  {String} paramToGet The property to retrieve on url
*/
Controller.prototype.head = function(model, path, paramToGet) {
  // Determine if paramToGet is not empty, and get good function name
  var fn = this.getFn(paramToGet);

  // Add methode head to the route
  this.router.head(path, function(req, res) {

    logger.info('[ ControllerRoutes.head ] - revceiving request, route is : ' + path);

    // Find
    model[fn](req.params[paramToGet], function(err, val) {

      if (err) {
        res.send(err);
      }

      //Succes so send success
      res.status(200).send('OK');
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
* @param  {String} path the root path
*/
Controller.prototype.post = function(Model, path) {
  // Add methode post to the route
  this.router.post(path, function(req, res) {

    logger.info('[ ControllerRoutes.post ] - revceiving request, route is : ' + path);

    //Create a instance of model, used to save in db
    var obj  = new Model();

    //Retrieve all property of the object in the current model, and omit default property of mongodb
    _.each( _.omit(Model.schema.paths, DEFAULT_PROP_MONGODB), function(val, key) {

      obj[key] = req.body[key];
    });

    //Save object in db
    obj.save(function(err) {

      if (err) {
        res.send(err);
      }

      //Succes so Send a jsonfile
      res.json(dm.userCreatedSucces);
    });
  });
};

/**
* Implement the http request : PUT </br>
* Update an object in integrallity </br>
* Send a error to the client if the request failed, otherwise a json file to the client with the data
*
* @method put
* @param  {Object} model the data model object
* @param  {String} path the root path
* @param  {String} paramToGet The property to retrieve on url to update the object
*/
Controller.prototype.put = function(model, path, paramToGet) {
  // Add methode update to the route
  this.router.put(path, function(req, res) {

    logger.info('[ ControllerRoutes.put ] - revceiving request, route is : ' + path);
    if (_.isEmpty(paramToGet)) {
      res.status(400).send('Id not defined');
      return;
    }

    //Find
    model.findById(req.params[paramToGet], function(err, val) {

      if (err) {
        res.send(err);
      }

      //Retrieve all property of the object in the current model, and omit default property of mongodb
      _.each( _.omit(model.schema.paths, DEFAULT_PROP_MONGODB), function(val, key) {

        val[key] = req.body[key];
      });

      // save the user and check for errors
      val.save(function(err) {

        if (err) {
          res.send(err);
        }

        //Succes so Send a jsonfile
        res.json(dm.userUpdated);
      });
    });
  });
};

/**
* Implement the http request : PATCH </br>
* Update an object partialy </br>
* Send a error to the client if the request failed, otherwise a json file to the client with the data
*
* @method patch
* @param  {Object} model the data model object
* @param  {String} path the root path
* @param  {String} paramToGet The property to retrieve on url to update the object
*/
Controller.prototype.patch = function(model, path, paramToGet) {
  //Update user
  this.router.patch(path, function(req, res) {

    logger.info('[ ControllerRoutes.patch ] - revceiving request, route is : ' + path);
    if (_.isEmpty(paramToGet)) {
      res.status(400).send('Id not defined');
      return;
    }

    //Find
    model.findById(req.params[paramToGet], function(err, val) {

      if (err) {
        res.send(err);
      }

      //read each key, and update the model to save it on db
      _.each(req.body, function(value, key) {
        //Assign value
        val[key] = value;
      });

      // save the user and check for errors
      val.save(function(err) {

        if (err) {
          res.send(err);
        }
        res.json(dm.userUpdated);
      });
    });
  });
};

/**
* Implement the http request : DELETE </br>
* Delete an object </br>
* Send a error to the client if the request failed, otherwise a json file to the client with the data
*
* @method delete
* @param  {Object} model the data model object
* @param  {String} path the root path
* @param  {String} paramToGet The property to retrieve on url to delete the object
*/
Controller.prototype.delete = function(model, path, paramToGet) {
  //Update user
  this.router.delete(path, function(req, res) {

    logger.info('[ ControllerRoutes.delete ] - revceiving request, route is : ' + path);

    if (_.isEmpty(paramToGet)) {
      res.status(400).send('Id not defined');
      return;
    }

    model.remove({_id: req.params[paramToGet]}, function(err, user) {

      if (err) {
        res.send(err);
      }
      res.json(dm.userDeleted);
    });
  });
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
Controller.prototype.addRoute = function(path, nameModel, reqExcluded, paramToRetrieve) {

  logger.info("[ ControllerRoutes.addRoute ] - new route found, path : " + path);

  //retrieve the model
  var model = this.models.getModel(nameModel);

  //check if model is not false
  if (model !== false) {
    logger.info("[ ControllerRoutes.addRoute ] - adding new route, path : " + path);

    //Handle wich requests are implemented
    //Retrieve the difference betwenn ALL_HTTP_REQUESTS and all requests excluded
    _.each( _.difference(this.ALL_HTTP_REQUESTS, reqExcluded), function(fn) {
      //Call function by his name
      this[fn](model, path, paramToRetrieve);
    }, this);

    return true;
  }

  logger.warning( '[ ControllerRoutes.addRoute ] - can\'t add route : \'' + path + '\' ,because model is not defined');
  return false;
};

/**
* Add a middleware
*
* @method addMidlleware
*/
Controller.prototype.addMidlleware = function() {

  this.router.use(function(req, res, next) {

    next(); // make sure we go to the next routes and don't stop here
  });
};

/**
* Initialise the controller </br>
* Retrieve all routes and thoose alias and add there into router
*
* @method init
*/
Controller.prototype.init = function() {
  logger.info('[ ControllerRoutes.init ] - start');

  //Init models Controller
  this.models.init();

  //Ass middleware
  this.addMidlleware();

  // read json file and add routes
  _.each(routes.routes, function(route) {

    //Execute the joi vailidation
    var result = routeJoiSchema.validate(route);

    //Check if have no error in joi validation
    if (_.isEmpty(result) || _.isEmpty(result.error)) {

      //create a array that contains the main route, and all thoose aliases
      var routeAndAlias = [];
      routeAndAlias.push(route.path);

      if (!_.isEmpty(route.alias)) {
        routeAndAlias.push(route.alias);
        routeAndAlias = _.flatten(routeAndAlias);
      }

      //add Main route
      _.each(routeAndAlias, function(val) {
        this.addRoute(val, route.model, route.requestExcluded, route.paramToRetrieve);
      }, this);

    } else {
      logger.error('[ ControllerRoutes.init ] - error when trying to add a new route, please check the file : \'routes.json\'');

      //log each error
      _.forEach(result.error.details, function(val) {

          logger.warning('[ ControllerRoutes.initP ] - ' + val.message + ' at ' + val.path);
      });
    }
  }, this);
};

/**
* Export current Controller to use it on node
*/
module.exports = new (Controller)();
