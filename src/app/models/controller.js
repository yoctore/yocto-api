'use strict';

var _           = require('lodash');
var mongoose    = require('mongoose');
var logger      = require('yocto-logger');
var Schema      = mongoose.Schema;
var glob        = require('glob');
var fs          = require('fs');
var path        = require('path');
var joi         = require('joi');

/**
 * List of valid type that can use with yocto-api
 * @type {Array}
 * @default ['String', 'ObjectId', 'Number', 'Boolean']
 */
var LIST_VALID_TYPE_JOI = ['String', 'ObjectId', 'Number', 'Boolean'];

// Schema of joi validation, each models should pass this validation
var modelJoiSchema = joi.object().keys({
  name            : joi.string().required().min(1).trim(),
  properties      : joi.object().required().min(1).pattern(/.+/, [
    joi.object().keys({
      type     : [
        joi.string().required().valid(LIST_VALID_TYPE_JOI),
        joi.array().min(1).items(
          joi.string().valid(LIST_VALID_TYPE_JOI)
        )
      ],
      required : joi.boolean().default(true)
    }),
    joi.array().min(1).items(
      joi.string().valid(LIST_VALID_TYPE_JOI),
      joi.object().keys({
        type     : [
          joi.string().required().valid(LIST_VALID_TYPE_JOI),
          joi.array().min(1).items(
            joi.string().valid(LIST_VALID_TYPE_JOI)
          )
        ],
        required : joi.boolean().default(true)
      })
    ),
    joi.string().valid(LIST_VALID_TYPE_JOI)
  ])
});

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
*
* @date : 11/05/2015
* @author : Cedric Balard <cedric@yocto.re>
* @copyright : Yocto SAS, All right reserved
* @class
*/
function Controller () {

  /**
  * Array of Object that contains all models found in folder
  *
  * @property {Array} tabModel
  * @default empty
  */
  this.tabModel = [];

  /**
   * Load mongoose controller to execute operation on database
   * @type {Object}
   */
  this.mongoose = mongoose;

  /**
   * Default logger
   * @type {Object}
   */
  this.logger   = logger;
}

/**
 * Add model in @tabModel
 * To be added, the model should before pass with success the joi validation
 * If model.fn isn't empty, all methods specified will be added in model.methods
 *
 * @method addModel
 * @param {Object} model      [description]
 * @param {String} pathModels [description]
 */
Controller.prototype.addModel = function (model, pathModels) {

  // Execute the joi vailidation
  var result = modelJoiSchema.validate(model);

  // Check if have no error in joi validation
  if (_.isEmpty(result) || _.isEmpty(result.error)) {

    try {
      // Instantiate a new mongodb Schema based in model
      var theSchema = new Schema(model.properties);

      // TODO : a téster comme dans oscar ; rajouter dans le readme ...
      // Test if model have methods to implement
      if (!_.isEmpty(model.fn)) {
        logger.debbug('[ ControllerModel.addModel ] - methods found for model : ' + model.name);

        // Load corresponded file to retrieve function
        var funcFile = require(path.normalize(pathModels + model.name.toLowerCase() + '.js'));

        // Read each propety to retrievethe fn (function name) of each function
        _.each(model.fn, function (fn) {
          theSchema.methods[fn] = funcFile[fn];
        });
      }

      // Create mongobd model based on the json model file
      var mongModel = mongoose.model(model.name, theSchema);

      // Add the MongoModel in the array tabModel
      this.tabModel.push({
        name          : model.name,
        mongooseModel : mongModel
      });

      this.logger.debug('[ ControllerModel.addModel ] - model added for : ' + model.name);
      return true;
    } catch (e) {

      this.logger.error('[ ControllerModel.addModel ] - error, more details : ' + e);
      return false;
    }
  }

  logger.error('[ ControllerModel.addModel ] - error in JOI validation for model : ' + model.name);

  // log each error
  _.forEach(result.error.details, function (val) {
    this.logger.warning('[ ControllerRoutes.addModel ] - ' + val.message + ' at ' + val.path);
  }, this);
  return false;
};

/**
* Initialise the Controller</br>
* Retrieve all json file in folder 'pathModels' and load all models
*
* @method init
* @param {String} pathModels Path of folders that contains all jsonFile
*/
Controller.prototype.init = function (pathModels) {

  this.logger.info('[ ControllerModels.init ] - start');

  // Get all json file in repoitory models
  _.each(_.words(glob.sync(pathModels + '*.json', 'cwd'), /[^,,]+/g), function (file) {

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
* Get model from models.json and format it with mongoose
*
* @param {String} nameModel the name of model to retrieve
* @return {Object} {Boolean} return the model if founded, or false otherwise
*/
Controller.prototype.getModel = function (nameModel) {

  if (!_.isEmpty(nameModel) && _.isString(nameModel)) {

    // return the model founded
    var index = _.findIndex(this.tabModel, { 'name' : nameModel });

    // Test if a model was found
    if (_.isUndefined(index) || (index >= 0)) {
      this.logger.info('[ ControllerModels.getModel ] - get Model of : ' + nameModel);
      return this.tabModel[index].mongooseModel;
    }
  }
  this.logger.error('[ ControllerModels.getModel ] - error model not found,' +
  ' model name is : ' + nameModel);
  return {};
};

/**
* Export current Controller to use it on node
*/
module.exports = new (Controller)();
