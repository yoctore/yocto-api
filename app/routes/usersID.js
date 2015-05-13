
var dm          = require('../defaultMessage.js');
var _           = require('lodash');
var User        = require('../models/user.js');
var yoctoRouter = require('../../yoctoRouter.js');


var userIDRouter = new yoctoRouter(null, /^\/user(s)?\/(.+)/);

userIDRouter.addGet(function(req, res) {

    console.log('[ /users/:user_id - GET ] - return one user');
    User.findById(req.params[1], function(err, user) {

        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

userIDRouter.addHead(function(req, res) {

    console.log('[ /users/:user_id - HEAD ] - return head');
    User.findById(req.params[1], function(err, user) {

        if (err) {
            res.send(err);
        }
        res.status(200).send('OK');
    });
});

//Update user
userIDRouter.addPut(function(req, res) {

    console.log('[ /users/:user_id - GET ] - return one user');
    User.findById(req.params[1], function(err, user) {

        if (err) {
            res.send(err);
        }

        user.name = req.body.name;
        user.firstname = req.body.firstname;
        user.email = req.body.email;

        // save the user and check for errors
        user.save(function(err) {

            if (err) {
                res.send(err);
            }
            res.json(dm.userUpdated);
        });
    });
});

userIDRouter.addPatch(function(req, res) {

    console.log('[ /users/:user_id - PATCH ] - return one user');
    User.findById(req.params[1], function(err, user) {

        if (err) {
            res.send(err);
        }

        //read each key, and update the model to save it on db
        _.each( req.body, function(value, key) {

            console.log( 'key : ' + key + ' value :' + value);
            user[key] = value;
        });

        // save the user and check for errors
        user.save(function(err) {

            if (err) {
                res.send(err);
            }
            res.json(dm.userUpdated);
        });

    });
});

//delete user
userIDRouter.addDelete(function(req, res) {

    User.remove({_id: req.params[1]}, function(err, user) {

        if (err) {
            res.send(err);
        }
        res.json(dm.userDeleted);
    });
});

module.exports = userIDRouter.router;
