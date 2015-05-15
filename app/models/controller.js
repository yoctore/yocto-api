//Controller models

var _           = require('lodash');
var mongoose    = require('mongoose');
var models      = require('./models.json');
var logger      = require('yocto-logger');

var Schema   = mongoose.Schema;
var tabModel = [];




/**
 * Create a new model and add it in tabModel
 *
 * @param {[type]} nameModel [description]
 * @param {[type]} model     [description]
 */
var addNewModel = function(nameModel, model) {
  logger.info('[ controller.addNewModel ] - ' + nameModel);

  //Instantiate a new mongodb Schema based in model
  model = new Schema(model);

  //Set the params
  var  t = [ nameModel, model ];

  // Generate the mongo Model
  var mongModel = mongoose.model.apply(mongoose, t);

  //Add the MongoModel in the array tabModel
  tabModel.push({ name  : nameModel,
                  mongooseModel : mongModel
                 });
};

/**
 * Main function
 * @return {[type]} [description]
 */
var main = function() {
  logger.info('[ controller models ] - start');

  // Read each model in models.json
  _.each(models.models, function(model) {

    //Read into each model
    _.each(model, function(val, key) {

      //Procces Model
      addNewModel(key, val);

    });
  });
};

main();

module.exports = tabModel;
