'use strict';

var _           = require('lodash');
var mongoose    = require('mongoose');
var logger      = require('yocto-logger');
var Schema      = mongoose.Schema;
var path        = require('path');
var glob        = require('glob');

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
 *
 * @date : 11/05/2015
 * @author : Cedric Balard <cedric@yocto.re>
 * @copyright : Yocto SAS, All right reserved
 * @class ControllerModels
 */
function Controller() {

  /**
    * Array of Object that contains all models
    *
    * @property {Array} tabModel
    * @default empty
    */
  this.tabModel = [];
}

/**
 * Create a new model and add it in tabModel
 *
 * @method addModel
 * @param {String} nameModel name of the model
 * @param {Object} model the model (formated in json)
 */
 Controller.prototype.addModel = function(nameModel, model) {

  logger.info('[ ControllerModel.addModel ] - ' + nameModel);

  //Instantiate a new mongodb Schema based in model
  this.model = new Schema(model);

  //Set the params
  var t = [ nameModel, model ];

  // Generate the mongo Model
  var mongModel = mongoose.model.apply(mongoose, t);

  //Add the MongoModel in the array tabModel
  this.tabModel.push({
                  name          : nameModel,
                  mongooseModel : mongModel
                 });
};

/**
 * Initialise the Controller</br>
 * Read models.json and load all models
 *
 * @method init
 */
Controller.prototype.init = function() {

  logger.info('[ ControllerModels.init ] - start');

  _.each(_.words(glob.sync("./app/models/*.json", 'cwd'), /[^,,]+/g), function(file) {

    var jsonFile = require('./'+path.basename(file));

    this.addModel(jsonFile.models.model.name, jsonFile.models.model.properties);

  }, this);
};

/**
* Get model from models.json and format it with mongoose
*
* @param {String} nameModel the name of model to retrieve
* @return {Object} return the model if founded, or false otherwise
*/
Controller.prototype.getModel = function(nameModel) {

  if (!_.isEmpty(nameModel) && _.isString(nameModel)) {

    // return the model founded
    var index = _.findIndex(this.tabModel, { 'name': nameModel });

    //Test if a model was found
    if (_.isUndefined(index) || (index >= 0)) {
      logger.info('[ ControllerModels.getModel ] - get Model of : ' + nameModel);
      return this.tabModel[index].mongooseModel;
    }
  }
  logger.error('[ ControllerModels.getModel ] - error model not found, model name is : ' + nameModel);
  return false;
};

/**
 * Export current Controller to use it on node
 */
module.exports = new (Controller)();
