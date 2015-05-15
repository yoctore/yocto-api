'use strict';
var express     = require('express');
var logger      = require('yocto-logger');

/**
 * Yocto Router
 *
 * This module his a wrapper of express.router for node js package
 *
 * For more details on used dependencies read links below :
 * - yocto-logger : git+ssh://lab.yocto.digital:yocto-node-modules/yocto-utils.git
 * - express : http://expressjs.com
 *
 * @date : 13/05/2015
 * @author : Cédric BALARD <cedric@yocto.re>
 * @copyright : Yocto SAS, All right reserved
 * @class yoctoRouter
 */
function YoctoRouter(dataModel, path) {
    this.router     = express.Router();     // get an instance of the express Router
    this.dataModel  = dataModel;
    this.path       = path;

    logger.info('[ YoctoRouter ] - New yocto router with path : ' + path);
}

YoctoRouter.prototype.addGet = function(callback) {

    this.router.get(this.path, callback);
};

YoctoRouter.prototype.addPost = function(callback) {

    this.router.post(this.path, callback);
};

YoctoRouter.prototype.addPut = function(callback) {

    this.router.put(this.path, callback);
};

YoctoRouter.prototype.addPatch = function(callback) {

    this.router.patch(this.path, callback);
};

YoctoRouter.prototype.addDelete = function(callback) {

    this.router.delete(this.path, callback);
};

YoctoRouter.prototype.addHead = function(callback) {

    this.router.head(this.path, callback);
};

//Exports class
module.exports = YoctoRouter;
