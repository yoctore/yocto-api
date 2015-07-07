/**
 * Unit tests
 */
var expect    = require("chai").expect;
var path      = require('path');
var base      = path.normalize(process.cwd());
var _         = require('lodash');
var routes    = require('../src/app/routes/controller.js'); // Load the api
var modelsCtl = require('../src/app/models/controller.js'); // Load the api


routes.logger.enableConsole(false); // Disable log


describe("routes/Controller ", function() {

  //A FACTORISER !!!!!
  describe("init()", function() {

    it("Init whit good paths files - should be true", function() {
      var init = routes.init(base+'/example/routes/routes.json', base +'/example/models/');
      expect(init).to.equal(true);

      //Delete all mongoose models
      _.each(routes.models.mongoose.models, function(val) {
        delete routes.models.mongoose.models[val.modelName];
      });
    });

    it("Init whit wrong path file for routes.json - should be false", function() {
      var init = routes.init(base+'/example/routes/routeaaas.json', base +'/example/models/');
      expect(init).to.equal(false);

      //Delete all mongoose models
      _.each(routes.models.mongoose.models, function(val) {
        delete routes.models.mongoose.models[val.modelName];
      });
    });

    it("Init whit wrong paths files for model and routes.json - should be false", function() {
      var init = routes.init(base+'/example/routes/routeaaas.json', base +'/example/modelaaas/');
      expect(init).to.equal(false);

      //Delete all mongoose models
      _.each(routes.models.mongoose.models, function(val) {
        delete routes.models.mongoose.models[val.modelName];
      });
    });

    it("Init whit wrong path file for model - should be false", function() {
      var init = routes.init(base+'/example/routes/routes.json', base +'/example/modelaaas/');
      expect(init).to.equal(false);

      //Delete all mongoose models
      _.each(routes.models.mongoose.models, function(val) {
        delete routes.models.mongoose.models[val.modelName];
      });
    });

    it("Init whit invalid routes config files - should be true", function() {
      var init = routes.init(base+'/example/invalid-config/routes/routes.json', base +'/example/models/');
      expect(init).to.equal(true);

      //Delete all mongoose models
      _.each(routes.models.mongoose.models, function(val) {
        delete routes.models.mongoose.models[val.modelName];
      });
    });

    it("Init whit invalid models and routes config  files - should be true", function() {
      var init = routes.init(base+'/example/invalid-config/routes/routes.json', base +'/example/invalid-config/models/');
      expect(init).to.equal(true);

      //Delete all mongoose models
      _.each(routes.models.mongoose.models, function(val) {
        delete routes.models.mongoose.models[val.modelName];
      });
    });

    it("Init whit invalid models config files - should be true", function() {
      var init = routes.init(base+'/example/routes/routes.json', base +'/example/invalid-config/models/');
      expect(init).to.equal(true);

      //Delete all mongoose models
      _.each(routes.models.mongoose.models, function(val) {
        delete routes.models.mongoose.models[val.modelName];
      });
    });
  });

  describe("addRoutes()", function() {
    var data = [
      { "path" : "/users", "alias" : ["/user"], "model" : "user", "paramToRetrieve" : ["user_id"], "requestExcluded" : ["put", "delete" , "patch"], "expectValue" : true},
      { "path" : "/users", "alias" : ["/user"], "model" : "user", "paramToRetrieve" : '', "requestExcluded" : ["put", "delete" , "patch"], "expectValue" : true},
    ];

    _.each(data, function(route) {
      it('Add a routes with datas : ' + JSON.stringify(route) + ' - should return ' + route.expectValue , function() {
        var addRoute = routes.addRoute(route.path, route.model, route.requestExcluded, route.paramToRetrieve);
        expect(addRoute).to.equal(route.expectValue);
      });
    });
  });

  describe("getFunctionName()", function() {
    var data = [
      { "message" : "valid dataformat, but fake value", "varToTest" : "thisIsAGreatFakeValue", "expectValue" : 'findById' },
      { "varToTest" : 2, "expectValue" : 'findById' },
      { "varToTest" : true, "expectValue" : 'findById' },
      { "varToTest" : {'toto' : 'tata'}, "expectValue" : 'findById' },
      { "varToTest" : {'toto' : 'tata'}, "expectValue" : 'findById' },
      { "expectValue" : 'find' }
    ];

    _.each(data, function(val) {
      it('test this value : ' + JSON.stringify(val) + ' - should return ' + val.expectValue , function() {
        var fnToTest = routes.getFunctionName(val.varToTest);
        expect(fnToTest).to.equal(val.expectValue);
      });
    });
  });


});

describe("models/Controller ", function() {
  describe("addModel()", function() {
    var data = [
      {
        "name"      : "user",
        "properties" : {
          "name"      : {
            "type" : "String",
            "required" : true
          },
          "firstname" : {
            "type" : "String",
            "required" : true
          },
          "email"     : {
            "type" : "String",
            "required" : true
          },
          "cart_id"   : ["ObjectId"]
        },
        "expectValue" : true
      },
      {
        "message"   : "Add twice the same model, ",
        "name"      : "user",
        "properties" : {
          "name"      : {
            "type" : "String",
            "required" : true
          },
          "firstname" : {
            "type" : "String",
            "required" : true
          },
          "email"     : {
            "type" : "String",
            "required" : true
          },
          "cart_id"   : ["ObjectId"]
        },
        "expectValue" : false
      },
      {
        "name"      : 123,
        "properties" : {
          "name"      : {
            "type" : "ererere",
            "required" : true
          },
          "firstname" : {
            "type" : "String",
            "required" : true
          },
          "email"     : {
            "type" : "String",
            "required" : true
          },
          "cart_id"   : ["ObjectId"]
        },
        "expectValue" : false
      },
      {'toto' : 'tata',
      "expectValue" : false}
    ];

    _.each(data, function(val) {
      it( (val.message ? val.message : '') + 'test add value : ' + JSON.stringify(_.omit(val, 'expectValue')) + ' - should return ' + val.expectValue , function() {
        var fnToTest = modelsCtl.addModel(_.omit(val, 'expectValue'));
        expect(fnToTest).to.equal(val.expectValue);
      });
    });
  });

  describe("getModel()", function() {

    var modelData = {
        "name"      : "modelTest",
        "properties" : {
          "name"      : {
            "type" : "String",
            "required" : true
          },
          "firstname" : {
            "type" : "String",
            "required" : true
          },
          "email"     : {
            "type" : "String",
            "required" : true
          },
          "cart_id"   : ["ObjectId"]
        }
      };

    modelsCtl.addModel(modelData);

    it('test getModel with correct model - should be an Object', function() {
      var fnToTest = modelsCtl.getModel('modelTest');
      expect(fnToTest).to.be.an('Function');
    });

    var data = [
      { "message" : "valid dataformat, but fake value", "varToTest" : "thisIsAGreatFakeValue", "expectValue" : false },
      { "varToTest" : 2, "expectValue" : false },
      { "varToTest" : true, "expectValue" : false },
      { "varToTest" : {'toto' : 'tata'}, "expectValue" : false },
      { "varToTest" : {'toto' : 'tata'}, "expectValue" : false },
      { "expectValue" : false }
    ];

    _.each(data, function(val) {
      it((val.message ? val.message : '') + 'test add value : ' + JSON.stringify(_.omit(val, 'expectValue')) + ' - should return ' + val.expectValue , function() {
        var fnToTest = modelsCtl.getModel(val.varToTest);
        expect(fnToTest).to.equal(val.expectValue);
      });
    });

  });


});
