'use-strict';

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using expresÒs
var bodyParser = require('body-parser');
var _          = require('lodash');
var mongoose   = require('mongoose');
var User       = require('./app/models/user.js');

var dm = require('./app/defaultMessage.js');


mongoose.connect('mongodb://localhost:27017'); // connect to our database


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var router = express.Router();              // get an instance of the express Router


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('[ route middleware ] - ' );

    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    console.log('[ / ] - GET ' );

    res.json( dm.welcome);
});

// create a user (accessed at POST http://localhost:8080/api/bears)
router.route(/\/user(s)?$/)
    .post(function(req, res) {
        console.log('[ /users - POST ] -  add new user ' );

        var user = new User();
        user.name = req.body.name;
        user.firstname = req.body.firstname;
        user.email = req.body.email;


        // save the bear and check for errors
        user.save(function(err) {
            if (err) {
                res.send(err);
            }

            res.json(dm.userCreatedSucces);
        });

    })

// get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        console.log('[ /users - GET ] - return all users ' );

        User.find(function(err, users) {
            if (err) {
                res.send(err);
            }

            res.json(users);
        });
    })

    .head(function(req, res) {
        console.log('[ /users - Head ] - return all users ' );

        User.find(function(err, users) {
            if (err) {
                res.send(err);
            }

            res.status(200).send('OK');
        });
    })
;
///^(\/user)(s)?(\/)(\d+)$/)
// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id) ex: http://localhost:8080/api/users/5551d97178adcf4a07000003
router.route(/^\/user(s)?\/(.+)/)
    .get(function(req, res) {
        console.log('[ /users/:user_id - GET ] - return one user ' );

        User.findById(req.params[1], function(err, user) {
            if (err) {
                res.send(err);
            }

            res.json(user);
        });
    })

    .head(function(req, res) {
        console.log('[ /users/:user_id - HEAD ] - return head ' );

        User.findById(req.params[1], function(err, user) {
            if (err) {
                res.send(err);
            }

            res.status(200).send('OK');
        });
    })

    //Update user
    .put(function(req, res) {
    // use our bear model to find the bear we want

        console.log('[ /users/:user_id - GET ] - return one user ' );

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
    })

    .patch(function(req, res) {
    // use our bear model to find the bear we want

        console.log('[ /users/:user_id - PATCH ] - return one user ' );

        User.findById(req.params[1], function(err, user) {

            if (err) {
                res.send(err);
            }

            //read each key, and update it
            _.each( req.body, function(value, key) {

                console.log( 'key : ' + key , ' value : ', value);

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
    })

    //delete user
    .delete(function(req, res) {
        User.remove({ _id: req.params[1]}, function(err, user) {

            if (err) {
                res.send(err);
            }

            res.json(dm.userDeleted);

        });
    })
;





// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
