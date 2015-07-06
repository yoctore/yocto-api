/**
 * Unit tests
 */
var expect    = require("chai").expect;
var path      = require('path');
var base      = path.normalize(process.cwd());
var _         = require('lodash');
var routes    = require('../src/app/routes/controller.js'); // Load the api

routes.logger.enableConsole(false); // Disable log


describe("routes/Controller ", function() {

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
    });

    it("Init whit wrong paths files for model and routes.json - should be false", function() {
      var init = routes.init(base+'/example/routes/routeaaas.json', base +'/example/modelaaas/');
      expect(init).to.equal(false);
    });

    it("Init whit wrong path file for model - should be false", function() {
      var init = routes.init(base+'/example/routes/routes.json', base +'/example/modelaaas/');
      expect(init).to.equal(false);
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
});
