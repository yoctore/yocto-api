'use strict';

var _                 = require('lodash');
var glob              = require('glob');
var fs                = require('fs');
var path              = require('path');
var logger            = require('yocto-logger');
var ejs               = require('ejs');
var lineByLineReader  = require('line-by-line');
var conf              = require('../../../package.json');


/**
 * Generator of comments for apidocjs (www.apidocjs.com)
 *
 * This generator will generate a comments file based on an EJS template and lot of model (define in json)
 *
 * The comments file once generated will be execute in a apidocjs process for generate an Api Web Documentation
 *
 * Apidocjs will provide also an interface for testing all REST request
 *
 *
 * For more details on these dependencies read links below :
 * - LodAsh : https://lodash.com/
 * - yocto-logger : git+ssh://lab.yocto.digital:yocto-node-modules/yocto-utils.git
 * - glob : https://www.npmjs.com/package/glob
 * - fs : https://nodejs.org/api/fs.html
 * - path : https://nodejs.org/api/path.html
 * - ejs : https://www.npmjs.com/package/ejs
 * - lineByLineReader : https://www.npmjs.com/package/line-by-line
 *
 *
 * @date : 26/05/2015
 * @author : BALARD, Cédric cedric@yocto.re
 * @copyright : YOCTO SAS, All rights reversed <http://www.yocto.re>
 */


var lineReader  = new lineByLineReader('./src/app/apidocGenerator/template/methods');
var PATH_APIDOC = './src/app/apidocGenerator/temp/apiDoc.js';
var commentFile = '';
var template    = '/**\n';

//Delete the commentFile if exist
if (fs.existsSync(PATH_APIDOC)) {

  logger.info('delete file apidoc file');
  fs.unlinkSync(PATH_APIDOC);
}

// Read eachline of file the template
lineReader.on('line', function(line) {
  //Test if line is not a commentaire
  if (!_.startsWith(_.trim(line), '#')) {
    template += '* ' + line + '\n';
  }
});

// All lines are read, file is closed now so we start process
lineReader.on('end', function() {

    //End comments in template
    template += '*/';

    //Get each json file that are on the models repository
    _.each(_.words(glob.sync( conf.apidoc.pathFolderModels+'*.json'), /[^,,]+/g), function(file) {

      console.log( '\n -- file : ' + file);
      //Get json file
      var jsonModel = JSON.parse(fs.readFileSync(file, 'utf-8'));
      //Create the doc
      createApiFile(template, jsonModel);
    });
});

/**
 * Create the whole comments based on templates and models
 * Add this into the comments file
 *
 * @method createApiFile
 * @param  {Object} theTemplate [description]
 * @param  {Object} jsonModel   [description]
 */
var createApiFile = function(theTemplate, jsonModel) {

  //Retrieve each methos on models files
  _.each(jsonModel.apidoc.methods, function(method) {

    //Retrieve all necessary Object in json
    var model = _.clone(jsonModel.models);
    _.extend(model, method);

    //EJS Process
    commentFile += ejs.render(theTemplate, model);
  });

  //Add the new comments method in file
  fs.appendFile(PATH_APIDOC, commentFile);
};
