'use strict';

var _           = require('lodash');
var mongoose    = require('mongoose');
var models      = require('./models.json');
var logger      = require('yocto-logger');
var Schema      = mongoose.Schema;

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
 * @param {nameModel} nameModel name of keys
 * @param {[type]} model type of the keys
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
 * Read routes.json and load all routes
 *
 * @method init
 */
Controller.prototype.init = function() {

  logger.info('[ ControllerModels.init ] - start');
  // Read each model in models.json
  _.each(models.models, function(model) {

    //Read into each model
    _.each(model, function(val, key) {

      //Procces Model
      this.addModel(key, val);
    }, this);
  }, this);
};

/**
* Get model from models.json and format it with mongoose
*
* @param {String} nameModel the name of model to retrieve
* @return {Object} return the model if founded
*/
Controller.prototype.getModel = function(nameModel) {

  logger.info('[ ControllerModels.getModel ] - get Model of : ' + nameModel);
  if (!_.isEmpty(nameModel) && _.isString(nameModel)) {
    return this.tabModel[_.findIndex(this.tabModel, { 'name': nameModel })].mongooseModel;
  }
};

/**
 * Export current Controller to use it on node
 */
module.exports = new (Controller)();
