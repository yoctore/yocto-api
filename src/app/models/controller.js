'use strict';

var _           = require('lodash');
var mongoose    = require('mongoose');
var logger      = require('yocto-logger');
var Schema      = mongoose.Schema;
var glob        = require('glob');
var fs          = require('fs');
var path        = require('path');
var Promise     = require('promise');
var Crud        = require('./crud-methods.js');

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
* Yocto API : Models Controller
*
* Controller of models, laod models from a json file
*
* All models are save in an array and are accessible by calling method getModel
*
* For more details on these dependencies read links below :
* - LodAsh : https://lodash.com/
* - yocto-logger : git+ssh://lab.yocto.digital:yocto-node-modules/yocto-utils.git
* - mongoose : http://mongoosejs.com/
* - glob : https://www.npmjs.com/package/glob
* - fs : https://nodejs.org/api/fs.html
* - path : https://nodejs.org/api/path.html
*
* @date : 11/05/2015
* @author : Cedric Balard <cedric@yocto.re>
* @copyright : Yocto SAS, All right reserved
* @class ModelController
*/
function ModelController () {

  /**
  * Array of Object that contains all models found in folder
  *
  * @property tabModel
  * @type Array of Object
  * @default empty
  */
  this.tabModel = [];

  /**
  * Load mongoose controller to execute operation on database
  *
  * @property mongoose
  * @type {Object}
  */
  this.mongoose = mongoose;

  /**
  * Default yocto-logger
  *
  * @property logger
  * @type {Object}
  */
  this.logger   = logger;
}

/**
* Add model in @tabModel
* If model.fn isn't empty, all methods specified will be added in model.methods
*
* @method addModel
* @param {Object} model the current model found in json file
* @param {String} pathModels path of the current model on server
* @return {Boolean} True if current model was added in tabModel, otherwise false
*/
ModelController.prototype.addModel = function (model, pathModels) {

  try {
    // Instantiate a new mongodb Schema based in model
    var schema = new Schema(model.properties);

    if (!_.isEmpty(model.fn)) {

      // Load corresponded file to retrieve function
      var funcFile = require(path.normalize(pathModels + '/../'+ model.name.toLowerCase() + '.js'));
      // Read each propety to retrievethe fn (function name) of each function
      _.each(model.fn, function (fn) {
        schema.methods[fn] = funcFile[fn];
      });
    }

    // Create mongobd model based on the json model file
    var mongModel = mongoose.model(model.name, schema);

    // Create a new Crud object for default Method
    var crud = new Crud();
    crud.init(mongModel);
    mongModel.schema.methods.crud = crud;

    // Add the MongoModel in the array tabModel
    this.tabModel.push({
      name          : model.name,
      mongooseModel : mongModel
    });

    this.logger.info('[ ControllerModel.addModel ] - model added for : ' + model.name);
    return true;
  } catch (e) {

    this.logger.error('[ ControllerModel.addModel ] - error when adding model "' + model.name +
    '", more details : ' + e);
    return false;
  }
};

function addDefaultMethods(Model) {

  // Create Method in model
  Model.schema.methods.get = function (id) {

    // Determine if paramToGet is not empty, and get good function name. If is empty, find all documents
    var fn = 'find';

    if (!_.isUndefined(id) && _.isString(id)) {
      fn = 'findById';
    } else if (!_.isUndefined(id) && _.isObject(id)) {
      fn = 'findOne';
    }

    return new Promise (function (fulfill, reject) {
      // Find object
      Model[fn]((!_.isUndefined(id) ? id : ''), function (err, val) {
        if (err) reject(err);
        else fulfill(val);
      });
    });
  };

  // Create Method in model
  Model.schema.methods.delete = function (id) {

    return new Promise (function (fulfill, reject) {

      // Find object
      Model.remove({ _id : id }, function (err, val) {
        if (err) reject(err);
        else fulfill(val);
      });
    });
  };

  // Method that create an object into database
  Model.schema.methods.create = function (data) {

    return new Promise (function (fulfill, reject) {
      var obj = new Model();

      // Retrieve all property of the object in the current model, and omit default property of mongodb
      _.each(_.omit(Model.schema.paths, DEFAULT_PROP_MONGODB), function (val, key) {

        // Add the propriety to the new object
        obj[key] = data[key];
      });

      obj.save(function (err, val) {
        if (err) reject(err);
        else fulfill(val);
      });

    });
  };

  // Méthode to put or patch element in database
  Model.schema.methods.update = function (id, data, method) {

    return new Promise (function (fulfill, reject) {

      // Find in database
      Model.findById(id, function (err, objFound) {

        if (err) {
          reject(err);
        } else {

          // Retrieve all property of the object in the current model, and omit default property of mongodb
          _.each(_.omit(Model.schema.paths, DEFAULT_PROP_MONGODB) , function (val, key) {

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
}
  /**
  * Initialise the Controller</br>
  * Retrieve all json file in folder 'pathModels' and load all models
  *
  * @method init
  * @param {String} pathModels Path of the folder that contains all model '.json'
  */
  ModelController.prototype.init = function (pathModels) {

    this.logger.debug('[ ControllerModels.init ] - start');

    // Get all json file in repoitory models
    _.each(glob.sync(pathModels + '*.json', 'cwd'), function (file) {

      try {
        // Import the file
        var jsonFile = JSON.parse(fs.readFileSync(file), 'utf-8');

        // Add the model in the main array
        this.addModel(jsonFile.models.model, pathModels);

      } catch (e) {

        this.logger.error('[ ControllerModels.init() ] - error rencountring during init,' +
        ' more details : ' + e);
      }
    }, this);
  };

  /**
  * Get model from tabModel
  *
  * @param {String} nameModel the name of model to retrieve
  * @return {Boolean} return false if model not found otherwise return the model
  */
  ModelController.prototype.getModel = function (nameModel) {

    if (!_.isEmpty(nameModel) && _.isString(nameModel)) {

      // return the model founded
      var index = _.findIndex(this.tabModel, { 'name' : nameModel });

      // Test if a model was found
      if (_.isUndefined(index) || (index >= 0)) {
        this.logger.debug('[ ControllerModels.getModel ] - get Model of : ' + nameModel);
        return this.tabModel[index].mongooseModel;
      }
    }
    this.logger.error('[ ControllerModels.getModel ] - error model not found,' +
    ' model name is : ' + nameModel);
    return false;
  };

  /**
  * Export current Controller to use it on node
  */
  module.exports = new (ModelController)();
