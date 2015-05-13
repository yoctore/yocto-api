
var _   = require('lodash');

var defaultMessage = {
    code    : '',
    message : '',
    data    : {}
};

var code200 = _.merge(defaultMessage, {
                                code : '200'
                            });

var newMessage = function(codeMessage, messageText) {
    var codeTemp = _.clone(codeMessage);
    return _.merge(codeTemp, {
                                message : messageText
                            });
};


var welcome = newMessage(code200, 'Welcome to the api');

var userCreated = newMessage(code200, 'User was created with success');

var userUpdated = newMessage(code200, 'User was updated with success');

var userDeleted = newMessage(code200, 'User was deleted with success');

module.exports = {
    welcome             : welcome,
    userCreatedSucces   : userCreated,
    userUpdated         : userUpdated,
    userDeleted         : userDeleted

};
