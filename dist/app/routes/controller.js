"use strict";function Controller(){this.ALL_HTTP_REQUESTS=["post","get","put","patch","delete","head"],this.models=models,this.router=express()}var joi=require("joi"),_=require("lodash"),logger=require("yocto-logger"),express=require("express"),models=require("../models/controller.js"),dm=require("../defaultMessage.js"),fs=require("fs"),DEFAULT_PROP_MONGODB=["__v","_id"],routeJoiSchema=joi.object().keys({path:joi.string().required(),alias:joi.array().items(joi.string()),model:joi.string().required(),paramToRetrieve:joi.array().items(joi.string()),requestExcluded:joi.array().items(joi.string())});Controller.prototype.getFn=function(a){return _.isUndefined(a)?"find":"findById"},Controller.prototype.addHTTPRequestGets=function(a,b,c,d){var e=this.getFn(c);this.router[d](b,function(f,g){logger.info("[ ControllerRoutes.addHTTPRequest ] - revceiving "+d+" request, route is : "+b),a[e](f.params[c],function(a,b){a&&g.send(a);"get"===d?g.json(b):g.status(200).send("OK")})})},Controller.prototype.addHTTPRequest=function(a,b,c,d){var e=this;this.router[d](b,function(f,g){if(logger.info("[ ControllerRoutes.addHTTPRequest ] - revceiving "+d+" request, route is : "+b),_.isEmpty(c))return void g.status(400).send("Id not defined");"delete"===d?e.deleteObject(a,g,f,c):e.updateObject(a,g,f,c,e,d)})},Controller.prototype.updateObject=function(a,b,c,d,e,f){a.findById(c.params[d],function(d,g){d&&b.send(d),_.each("put"===f?_.omit(a.schema.paths,DEFAULT_PROP_MONGODB):c.body,function(a,b){g[b]=c.body[b],e.checkModelValidation(a,g,b)}),e.saveObject(g,b)})},Controller.prototype.deleteObject=function(a,b,c,d){a.remove({_id:c.params[d]},function(a,c){a&&b.send(a),b.json(dm.success)})},Controller.prototype.saveObject=function(a,b){a.save(function(a){a&&b.send(a),b.json(dm.success)})},Controller.prototype.post=function(a,b){var c=this;this.router.post(b,function(d,e){logger.info("[ ControllerRoutes.post ] - revceiving request, route is : "+b);var f=new a;_.each(_.omit(a.schema.paths,DEFAULT_PROP_MONGODB),function(a,b){f[b]=d.body[b],c.checkModelValidation(a,f,b)}),c.saveObject(f,e)})},Controller.prototype.checkModelValidation=function(a,b,c){_.isUndefined(a.caster)||_.isUndefined(a.caster.isRequired)||b.schema.path(c).validate(function(a){return _.isEmpty(_.compact(a))?!1:void 0})},Controller.prototype.addRoute=function(a,b,c,d){logger.info("[ ControllerRoutes.addRoute ] - new route found, path : "+a);var e=this.models.getModel(b);return e!==!1?(logger.info("[ ControllerRoutes.addRoute ] - adding new route, path : "+a),_.each(_.difference(this.ALL_HTTP_REQUESTS,c),function(b){"patch"===b||"put"===b||"delete"===b?this.addHTTPRequest(e,a,d,b):"get"===b||"head"===b?this.addHTTPRequestGets(e,a,d,b):this[b](e,a,d)},this),!0):(logger.warning("[ ControllerRoutes.addRoute ] - can't add route : '"+a+"' ,because model is not defined"),!1)},Controller.prototype.addMidlleware=function(){this.router.use(function(a,b,c){logger.debug("[ ControllerRoutes.Middleware ] - incoming request"),b.header("Access-Control-Allow-Origin","*"),b.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),b.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, PATCH, OPTIONS"),_.each(a.body,function(b,c){_.isEmpty(b)&&delete a.body[c]}),c()})},Controller.prototype.init=function(a,b){if(logger.info("[ ControllerRoutes.init ] - start"),!_.isString(a)||!_.isString(b))return!1;var c=JSON.parse(fs.readFileSync(a,"utf-8"));this.models.init(b),this.addMidlleware(),_.each(c.routes,function(a){var b=routeJoiSchema.validate(a);if(_.isEmpty(b)||_.isEmpty(b.error)){var c=[];c.push(a.path),_.isEmpty(a.alias)||(c.push(a.alias),c=_.flatten(c)),_.each(c,function(b){this.addRoute(b,a.model,a.requestExcluded,a.paramToRetrieve)},this)}else logger.error("[ ControllerRoutes.init ] - error when trying to add a new route, please check the file : 'routes.json'"),_.forEach(b.error.details,function(a){logger.warning("[ ControllerRoutes.init ] - "+a.message+" at "+a.path)})},this)},module.exports=new Controller;