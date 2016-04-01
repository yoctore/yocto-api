var Q = require('q');

// valid account schema
exports.test1 = function(data) {
  var deferred = Q.defer();

  deferred.resolve({
    message : 'Yeahhhh'
  });

  return deferred.promise;
};
