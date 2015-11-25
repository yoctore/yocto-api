"use strict";function RouteController(a){this.ALL_HTTP_REQUESTS=["post","get","put","patch","delete","head"],this.models={},this.app={},this.logger=a||logger}var joi=require("joi"),_=require("lodash"),logger=require("yocto-logger"),fs=require("fs"),path=require("path"),utils=require("yocto-utils"),routeJoiSchema=joi.object().keys({path:joi.string().required().min(1).trim(),alias:joi.array().items(joi.string().min(1).trim()),model:joi.string().required().min(1).trim(),excluded:joi.array().items(joi.string().valid("post","get","put","patch","delete","head")),methods:joi.array().items(joi.object().keys({method:joi.string().required().allow("post","get","put","patch","delete","head"),path:joi.string().required().min(1),fn:joi.string().required().min(1)}))});RouteController.prototype.addRoute=function(a,b,c,d,e,f){var g=this,h={};logger.debug("[ ControllerRoutes.addRoute ] - new route found, path : "+a);var i=[],j=function(a,b,c,d){if(!_.isUndefined(a.params.id)){if(_.indexOf(d,a.params.id)>=0)return c();if(!a.params.id.match(/^[0-9a-fA-F]{24}$/))return b.status(200).jsonp({status:"error",code:"400000",message:"You have an error in your request, an Id should be compose by 24 digit and/or characters",data:{}})}return!0};h.get=function(a,b,c){g.app.get(b,function(d,e,f){var g=j(d,e,f,i);return g?(logger.debug("[ ControllerRoutes.get ] - revceiving request, route is : "+b),void a.read(d.params[c]).then(function(a){e.status(200).jsonp({status:"success",code:"200000",message:"Document(s) are found",data:_.isEmpty(a)?[]:a})})["catch"](function(a){e.status(200).jsonp({status:"error",code:"400000",message:"An error occured when retrieving document",data:{}}),logger.error("[ ControllerRoutes.get ] - error : "+a)})):g})},h.head=function(a,b,c,d){h.get(a,b,c,d)},h["delete"]=function(a,b){g.app["delete"](b,function(c,d,e){var f=j(c,d,e,i);if(!f)return f;logger.debug("[ ControllerRoutes.delete ] - revceiving request, route is : "+b);var g="deleted_date";if(!_.isUndefined(a.schema.paths[g])&&!_.isUndefined(c.params.id)){var h=utils.obj.underscoreKeys({updatedDate:Date.now(),deletedDate:Date.now()});return a.update(c.params.id,h).then(function(a){return _.isEmpty(a)?(logger.error("[ ControllerRoutes.delete ] - the document with id : "+c.params.id+" wasn't deleted because this id doesn't correspond to an existant document"),d.status(200).jsonp({status:"error",code:"400000",message:"An error occured, the document was not deleted because this id doesn't correspond to an existant document",data:{}})):(d.status(200).jsonp({status:"success",code:"200000",message:"The document(s) was deleted",data:{}}),void logger.info("[ ControllerRoutes.delete ] - the document with id : "+c.params.id+" was deleted"))})["catch"](function(a){d.status(200).jsonp({status:"error",code:"400000",message:"An error occured, the document was not deleted",data:{}}),logger.error("[ ControllerRoutes.delete ] - error : "+a)})}d.status(200).jsonp({status:"error",code:"400000",message:"The document was not deleted because id wasn'tspecified, or the field deleted_date doesn't exist in schema",data:{}}),logger.error("[ ControllerRoutes.delete ] - The document was not deleted because id wasn'tspecified, or the field deleted_date doesn't exist in schema")})},h.patch=function(a,b,c){g.app.patch(b,function(d,e,f){var g=j(d,e,f,i);if(!g)return g;logger.debug("[ ControllerRoutes.patch ] - revceiving request, route is : "+b);var h=d.body;if(!_.isUndefined(d.params.id)){var k="updated_date";return _.isUndefined(a.schema.paths[k])||(h=_.merge(h,utils.obj.underscoreKeys({updatedDate:Date.now()}))),a.update(d.params[c],h,"patch").then(function(a){return _.isEmpty(a)?(logger.error("[ ControllerRoutes.patch ] - the document with id : "+d.params.id+" wasn't updated because this id doesn't correspond to an existing document"),e.status(200).jsonp({status:"error",code:"400000",message:"An error occured, the document was not updated because this id doesn't correspond to an existing document",data:{}})):void e.status(200).jsonp({status:"success",code:"200000",message:"The document(s) was updated",data:{}})})["catch"](function(a){e.status(200).jsonp({status:"error",code:"400000",message:"An error occured, the document was not updated",data:{}}),logger.error("[ ControllerRoutes.patch ] - error : "+a)})}e.status(200).jsonp({status:"error",code:"400000",message:"The document wasn't updated because id wasn't specified in params.",data:{}}),logger.error("[ ControllerRoutes.patch ] - The document was not updated because id wasn'tspecified")})},h.put=function(a,b,c){g.app.put(b,function(d,e,f){var g=j(d,e,f,i);return g?(logger.debug("[ ControllerRoutes.put ] - revceiving request, route is : "+b),void a.update(d.params[c],d.body,"put").then(function(){e.status(200).jsonp({status:"success",code:"200000",message:"The document(s) was updated",data:{}})})["catch"](function(a){e.status(200).jsonp({status:"error",code:"400000",message:"An error occured, the document was not updated",data:{}}),logger.error("[ ControllerRoutes.put ] - error : "+a)})):g})},h.post=function(a,b){g.app.post(b,function(c,d,e){var f=j(c,d,e,i);return f?(logger.debug("[ ControllerRoutes.post ] - revceiving request, route is : "+b),void a.create(c.body).then(function(a){d.status(200).jsonp({status:"success",code:"200000",message:"The document(s) was created",data:a})})["catch"](function(a){d.status(200).jsonp({status:"error",code:"400000",message:"An error occured, the document was not created, please check your request",data:{}}),logger.error("[ ControllerRoutes.post ] - error : "+a)})):f})};var k=g.models.db.getModel(b);return k?(logger.debug("[ ControllerRoutes.addRoute ] - adding new route, path : "+a),_.each(e.methods,function(a){var c=a.path.split("/");i.push(_.first(c));try{var d=path.normalize(e.path+"/"+a.path),h=require(path.normalize(f+b.toLowerCase()+".js"));if(_.isUndefined(h[a.fn]))throw" Function '"+a.fn+"' not found";g.app[a.method](d,function(b,c,d){h[a.fn](b,c,d,k)})}catch(j){logger.error("[ ControllerRoutes.addRoute ] - can't add specifiq route : '"+a.sync+"' for model : '"+b+"', more details : "+j)}}),_.each(_.difference(g.ALL_HTTP_REQUESTS,c),function(b){h[b](k,a,"id",b)},this),!0):(logger.error("[ ControllerRoutes.addRoute ] - can't add route : '"+a+"' ,because model is not defined"),!1)},RouteController.prototype.init=function(a,b,c,d){logger.debug("[ ControllerRoutes.init ] - start"),this.app=a,this.app.use(this.middlewareApi);var e={};if(this.models=c,!_.isString(b)||!_.isString(d)||_.isEmpty(b)||_.isEmpty(d))return!1;try{fs.accessSync(b),e=JSON.parse(fs.readFileSync(b,"utf-8"))}catch(f){return logger.error("[ ControllerRoutes.init ] - error during loading files, more details : "+f),!1}return _.each(e.routes,function(a){var b=routeJoiSchema.validate(a);if(_.isEmpty(b)||_.isEmpty(b.error)){var c=[];c.push(a.path),_.isEmpty(a.alias)||(c.push(a.alias),c=_.flatten(c)),_.each(c,function(b){b+="/:id?",this.addRoute(b,a.model,a.excluded,a.param,a,d,a.optionalParam)},this)}else logger.error("[ ControllerRoutes.init ] - Joi Validation failed ; error when trying to add a new route, please check the file : 'routes.json'"),_.each(b.error.details,function(a){logger.warning("[ ControllerRoutes.init ] - "+a.message+" at "+a.path)})},this),!0},RouteController.prototype.middlewareApi=function(a,b,c){logger.info("[ api.middlewareApi ] - incoming request : [ "+a.method+" ] on url "+a.url+(_.isEmpty(a.body)?"":" -  body is : \n"+utils.obj.inspect(a.body))),_.isUndefined(a.headers["x-client-type"])||"apidocjs"!==a.headers["x-client-type"]||_.isUndefined(a.body.data)||_.isEmpty(a.body.data)||(a.body.data=JSON.parse(a.body.data)),c()},module.exports=new RouteController;