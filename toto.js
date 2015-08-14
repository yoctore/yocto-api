var _ = require('lodash');

var getTypeParam = function (param) {
  return _.isArray(param) ? 'array' : typeof param;
};


var a = "a";
var b = ["a"];
var c = {
  a : 'a'
};

var d = {
  d : ['fefe']
};

var e = 34;

console.log( ' a = ' + getTypeParam(a));
console.log( ' b = ' + getTypeParam(b));
console.log( ' c = ' + getTypeParam(c));
console.log( ' d = ' + getTypeParam(d));
console.log( ' e = ' + getTypeParam(e));
