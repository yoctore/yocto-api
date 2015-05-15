var _           = require('lodash');
var logger      = require('yocto-logger');

var yoctoRouter = require('../../yoctoRouter.js');
var dm          = require('../defaultMessage.js');
var routes      = require('./routes.json');
var models  = require('../models/controller.js');

var tabRouter = [] ;


/**
 * Get model from models.json by call the model controller
 *
 * @param {[type]} nameModel [description]
 */
var getModel = function(nameModel) {

  return models[_.findIndex(models, { 'name': nameModel })].mongooseModel;
};


var reqGet = function(model, newRouter, indParamToGet) {
  newRouter.addGet(function(req, res) {

    if( _.isUndefined(indParamToGet)) {
      model.find(req.params[indParamToGet], function(err, val) {
        if (err) {
          res.send(err);
        }
        res.json(val);
      });
    } else {
      model.findById(req.params[indParamToGet], function(err, val) {
        if (err) {
          res.send(err);
        }
        res.json(val);
      });
    }

  });
};


var reqHead = function(model, newRouter, indParamToGet) {

  newRouter.addHead( function(req, res) {

    console.log('[ HEAD ]');

    if( _.isUndefined(indParamToGet)) {

      model.find(function(err, val) {

        if (err) {
          res.send(err);
        }
        res.status(200).send('OK');
      });
    } else {

      model.findById(function(err, val) {
        if (err) {
          res.send(err);
        }
        res.status(200).send('OK');
      });
    }
  });
};


var reqPost = function(model, newRouter) {
  newRouter.addPost(function(req, res) {

    console.log('[ POST ] ');


    //Create a instance of model, used to save in db
    var obj  = new model();

    //Retrieve all property of the object in the current model
    _.each( model.schema.paths, function(val, key) {

      // test if key doesn't start with '_' like '_id' or '__v'
      if(! _.startsWith(key, '_')) {
        obj[key] = req.body[key];
      }
    });

    obj.save(function(err) {

      if (err) {
        res.send(err);
      }
      res.json(dm.userCreatedSucces);
    });

  });
};

var reqPut = function(model, newRouter, indParamToGet) {
  //Update user
  newRouter.addPut(function(req, res) {

      console.log('[ /users/:user_id - GET ] - return one user');
      model.findById(req.params[indParamToGet], function(err, val) {

          if (err) {
              res.send(err);
          }

          val.name = req.body.name;
          val.firstname = req.body.firstname;
          val.email = req.body.email;

          // save the user and check for errors
          val.save(function(err) {
              if (err) {
                  res.send(err);
              }
              res.json(dm.userUpdated);
          });
      });
  });
};

var reqPatch = function(model, newRouter, indParamToGet) {
  //Update user
  newRouter.addPatch(function(req, res) {

      console.log('[ /users/:user_id - GET ] - return one user');
      model.findById(req.params[indParamToGet], function(err, val) {

          if (err) {
              res.send(err);
          }

          //read each key, and update the model to save it on db
          _.each( req.body, function(value, key) {

              console.log( 'key : ' + key + ' value :' + value);
              val[key] = value;
          });

          // save the user and check for errors
          val.save(function(err) {
              if (err) {
                  res.send(err);
              }
              res.json(dm.userUpdated);
          });
      });
  });
};

var reqDelete = function(model, newRouter, indParamToGet) {
  //Update user
  newRouter.addDelete(function(req, res) {

      console.log('[ /users/:user_id - GET ] - return one user');
      model.remove({_id: req.params[indParamToGet]}, function(err, user) {

          if (err) {
              res.send(err);
          }
          res.json(dm.userDeleted);
      });
  });
};



/**
 * Add a route to the router
 *
 * @param {[type]} path      [description]
 * @param {[type]} nameModel [description]
 */
var addRoute = function(path, nameModel, reqNotDes, param) {

  logger.info( " [ addRoute ] - new route found, path : " + path );

  //retrieve the model
  var model = getModel(nameModel);

  //Create a new router
  var newRouter = new yoctoRouter(null, path);

  //Handle here requestNotDesired

  if(_.indexOf(reqNotDes, 'post') < 0) {
    reqPost(model, newRouter);
  }

  if(_.indexOf(reqNotDes, 'get') < 0) {
    reqGet(model, newRouter, param);
  }

  if(_.indexOf(reqNotDes, 'put') < 0) {
    reqPut(model, newRouter, param);
  }

  if(_.indexOf(reqNotDes, 'patch') < 0) {
    reqPatch(model, newRouter, param);
  }

  if(_.indexOf(reqNotDes, 'delete') < 0) {
    reqDelete(model, newRouter, param);
  }

  if(_.indexOf(reqNotDes, 'head') < 0) {
    reqHead(model, newRouter, param);
  }

  //Add the current router to the tab of router
  tabRouter.push(newRouter.router);

};


logger.info('[ controller routes ] - start');

// read json file and add routes
_.each(routes.routes, function(route) {

  addRoute(route.path, route.model, route.requestNotDesired, route.indexParam);

}, this);




module.exports = tabRouter;
