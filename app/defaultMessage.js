/**
 * Creator of message
 */

var _   = require('lodash');

var defaultMessage = {
    code    : '',
    message : '',
    data    : {}
};

var code200 = _.merge(defaultMessage, { code : '200' });

var newMessage = function(codeMessage, messageText) {
    var codeTemp = _.clone(codeMessage);
    return _.merge(codeTemp, { message : messageText });
};

var welcome     = newMessage(code200, 'Welcome to the api');
var userCreated = newMessage(code200, 'User was created with success');
var userUpdated = newMessage(code200, 'User was updated with success');
var userDeleted = newMessage(code200, 'User was deleted with success');
var success     = newMessage(code200, 'Operation success');


module.exports = {
    welcome             : welcome,
    userCreatedSucces   : userCreated,
    userUpdated         : userUpdated,
    userDeleted         : userDeleted,
    success             : success
};



// /**
// * Implement the http request : PUT </br>
//
//          _.each(_.omit(model.schema.paths, DEFAULT_PROP_MONGODB), function(val, key) {
//
//         value[key] = req.body[key];
//
//
// /**
// * Implement the http request : PATCH </br>

//     //Find
//
//       //read each key, and update the model to save it on db
//       _.each(req.body, function(value, key) {
//
//         //Assign value
//         val[key] = value;
//       });

//Find
//     model.findById(req.params[paramToGet], function(err, val) {
//
//       if (err) {
//         res.send(err);
//       }
//
//       //read each key, and update the model to save it on db
//       _.each(req.body, function(value, key) {
//
//         //Assign value
//         val[key] = value;
//       });
//
//       // save the user and check for errors
//       val.save(function(err) {
//
//         if (err) {
//           res.send(err);
//         }
//         res.json(dm.success);
