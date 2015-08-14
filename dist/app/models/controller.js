"use strict";function Controller(){this.tabModel=[],this.mongoose=mongoose,this.logger=logger}var _=require("lodash"),mongoose=require("mongoose"),logger=require("yocto-logger"),Schema=mongoose.Schema,glob=require("glob"),fs=require("fs"),path=require("path"),joi=require("joi"),LIST_VALID_TYPE_JOI=["String","ObjectId","Number","Boolean"],modelJoiSchema=joi.object().keys({name:joi.string().required().min(1).trim(),properties:joi.object().required().min(1).pattern(/.+/,[joi.object().keys({type:[joi.string().required().valid(LIST_VALID_TYPE_JOI),joi.array().min(1).items(joi.string().valid(LIST_VALID_TYPE_JOI))],required:joi["boolean"]()["default"](!0)}),joi.array().min(1).items(joi.string().valid(LIST_VALID_TYPE_JOI),joi.object().keys({type:[joi.string().required().valid(LIST_VALID_TYPE_JOI),joi.array().min(1).items(joi.string().valid(LIST_VALID_TYPE_JOI))],required:joi["boolean"]()["default"](!0)})),joi.string().valid(LIST_VALID_TYPE_JOI)])});Controller.prototype.addModel=function(a,b){var c=modelJoiSchema.validate(a);if(_.isEmpty(c)||_.isEmpty(c.error))try{var d=new Schema(a.properties);if(!_.isEmpty(a.fn)){logger.debbug("[ ControllerModel.addModel ] - methods found for model : "+a.name);var e=require(path.normalize(b+a.name.toLowerCase()+".js"));_.each(a.fn,function(a){d.methods[a]=e[a]})}var f=mongoose.model(a.name,d);return this.tabModel.push({name:a.name,mongooseModel:f}),this.logger.debug("[ ControllerModel.addModel ] - model added for : "+a.name),!0}catch(g){return this.logger.error("[ ControllerModel.addModel ] - error, more details : "+g),!1}return logger.error("[ ControllerModel.addModel ] - error in JOI validation for model : "+a.name),_.forEach(c.error.details,function(a){this.logger.warning("[ ControllerRoutes.addModel ] - "+a.message+" at "+a.path)},this),!1},Controller.prototype.init=function(a){this.logger.info("[ ControllerModels.init ] - start"),_.each(_.words(glob.sync(a+"*.json","cwd"),/[^,,]+/g),function(b){try{var c=JSON.parse(fs.readFileSync(b),"utf-8");this.addModel(c.models.model,a)}catch(d){this.logger.error("[ ControllerModels.init() ] - error rencountring during init, more details : "+d)}},this)},Controller.prototype.getModel=function(a){if(!_.isEmpty(a)&&_.isString(a)){var b=_.findIndex(this.tabModel,{name:a});if(_.isUndefined(b)||b>=0)return this.logger.info("[ ControllerModels.getModel ] - get Model of : "+a),this.tabModel[b].mongooseModel}return this.logger.error("[ ControllerModels.getModel ] - error model not found, model name is : "+a),{}},module.exports=new Controller;