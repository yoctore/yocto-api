
var dm          = require('../defaultMessage.js');
var _           = require('lodash');
var User        = require('../models/user.js');
var yoctoRouter = require('../../yoctoRouter.js');

/**
 * Routes /user(s)
 *
 * @date : 13/05/2015
 * @author : Cédric BALARD <cedric@yocto.re>
 * @copyright : Yocto SAS, All right reserved
 * @route /user
 */

//Declare a new yoctoRouter
var userRouter = new yoctoRouter(null, /\/user(s)?$/);

userRouter.addGet( function(req, res) {
    
    console.log('[ /users - GET ] - return all users');
    User.find(function(err, users) {

        if (err) {
            res.send(err);
        }
        res.json(users);
    });
});

userRouter.addHead( function(req, res) {

    console.log('[ /users - Head ] - return all users');
    User.find(function(err, users) {

        if (err) {
            res.send(err);
        }
        res.status(200).send('OK');
    });
});

userRouter.addPost(function(req, res) {

    console.log('[ /users - POST ] -  add new user');

    var user        = new User();
    user.name       = req.body.name;
    user.firstname  = req.body.firstname;
    user.email      = req.body.email;

    user.save(function(err) {

        if (err) {
            res.send(err);
        }
        res.json(dm.userCreatedSucces);
    });

});

//Exports
module.exports = userRouter.router;
