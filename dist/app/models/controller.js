"use strict";function ModelController(){this.tabModel=[],this.mongoose=mongoose,this.logger=logger}var _=require("lodash"),mongoose=require("mongoose"),logger=require("yocto-logger"),Schema=mongoose.Schema,glob=require("glob"),fs=require("fs"),path=require("path");ModelController.prototype.addModel=function(a,b){try{var c=new Schema(a.properties);if(!_.isEmpty(a.fn)){var d=require(path.normalize(b+a.name.toLowerCase()+".js"));_.each(a.fn,function(a){c.methods[a]=d[a]})}var e=mongoose.model(a.name,c);return this.tabModel.push({name:a.name,mongooseModel:e}),this.logger.info("[ ControllerModel.addModel ] - model added for : "+a.name),!0}catch(f){return this.logger.error('[ ControllerModel.addModel ] - error when adding model "'+a.name+'", more details : '+f),!1}},ModelController.prototype.init=function(a){this.logger.debug("[ ControllerModels.init ] - start"),_.each(_.words(glob.sync(a+"*.json","cwd"),/[^,,]+/g),function(b){try{var c=JSON.parse(fs.readFileSync(b),"utf-8");this.addModel(c.models.model,a)}catch(d){this.logger.error("[ ControllerModels.init() ] - error rencountring during init, more details : "+d)}},this)},ModelController.prototype.getModel=function(a){if(!_.isEmpty(a)&&_.isString(a)){var b=_.findIndex(this.tabModel,{name:a});if(_.isUndefined(b)||b>=0)return this.logger.debug("[ ControllerModels.getModel ] - get Model of : "+a),this.tabModel[b].mongooseModel}return this.logger.error("[ ControllerModels.getModel ] - error model not found, model name is : "+a),!1},module.exports=new ModelController;