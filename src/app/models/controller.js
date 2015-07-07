'use strict';

var _           = require('lodash');
var mongoose    = require('mongoose');
var logger      = require('yocto-logger');
var Schema      = mongoose.Schema;
var path        = require('path');
var glob        = require('glob');
var fs          = require('fs');
var joi         = require('joi');

//Define a Joi schema for test if model have a goodformat
var modelJoiSchema = joi.object().keys({
  name            : joi.string().required().min(1).trim(),
  properties      : joi.object().required().min(1).pattern(/.+/, [
    joi.object().keys({
      type     : joi.string().required().valid(['String', 'ObjectId', 'Number', 'Boolean']),
      required : joi.boolean().default(true)
    }), joi.array(), joi.string().valid(['String', 'ObjectId', 'Number', 'Boolean'])
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

  this.mongoose = mongoose;

  this.logger   = logger;
}

/**
* Create a new model and add it in tabModel
*
* @method addModel
* @param {String} nameModel name of the model
* @param {Object} model the model (formated in json)
*/
Controller.prototype.addModel = function(model) {
  //Execute the joi vailidation
  var result = modelJoiSchema.validate(model);

  //Check if have no error in joi validation
  if (_.isEmpty(result) || _.isEmpty(result.error)) {

    try {
      //Instantiate a new mongodb Schema based in model
      this.model = new Schema(model.properties);

      //Set the params
      var t = [ model.name, model.properties ];

      // Generate the mongo Model
      var mongModel = this.mongoose.model.apply(this.mongoose, t);

      //Add the MongoModel in the array tabModel
      this.tabModel.push({
        name          : model.name,
        mongooseModel : mongModel
      });
      return true;
    } catch (e) {
      this.logger.error('[ ControllerModel.addModel ] - error, more details : ' +e );
      return false;
    }
  }

  logger.error('[ ControllerModel.addModel ] - error in joi validation ');

  //log each error
  _.forEach(result.error.details, function(val) {
    this.logger.warning('[ ControllerRoutes.init ] - ' + val.message + ' at ' + val.path);
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
Controller.prototype.init = function(pathModels) {

  this.logger.info('[ ControllerModels.init ] - start');

  //Get all json file in repoitory models
  _.each(_.words(glob.sync(pathModels+'*.json', 'cwd'), /[^,,]+/g), function(file) {

    try {
      //Import the file
      var jsonFile = JSON.parse(fs.readFileSync(file), 'utf-8');

      //Add the model in the main array
      this.addModel(jsonFile.models.model);

    } catch (e) {
      this.logger.error('[ ControllerModels.init() ] - error rencountring during init, more details : ' + e );
    }

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
      this.logger.info('[ ControllerModels.getModel ] - get Model of : ' + nameModel);
      return this.tabModel[index].mongooseModel;
    }
  }
  this.logger.error('[ ControllerModels.getModel ] - error model not found, model name is : ' + nameModel);
  return false;
};

/**
* Export current Controller to use it on node
*/
module.exports = new (Controller)();
