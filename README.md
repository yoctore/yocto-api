# Yocto API

This is a REST API for yocto

All http requests that are implemented by the yocto rest api :
  - get : get an object or all object
  - head : it 's the same that get, but return only the header
  - post : add a new object
  - put : a full update of object
  - patch : update a property of object that is specified
  - delete : delete an object


## Example :

#### Using the api with a mongodb

```javascript
'use strict';

var express    = require('express'); // Load express
var bodyParser = require('body-parser'); // load bodyparser
var mongoose   = require('mongoose'); // Load the mongodb driver
var routes     = require('./app/routes/controller.js'); // Load the api
var app        = express(); // Create app

// connect to our database
mongoose.connect('mongodb://localhost:27017');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8080;

//Initialise the API router
routes.init();

//Use the router
app.use('/api', routes.router);

// START THE SERVER
app.listen(port);

```


#### models.json file

You can add multiple models in the json file

You should specify each Key and the type of the value

```json
{
  "models" : [
    {
      "User" : {
      "name"      : "String",
      "firstname" : "String",
      "email"     : "String"
      }
    }
  ]
}
```


#### routes.json file

You can add multiple routes in the json file

You can add alias for the main Object of the url (it's useful for plurial)

By default all http request are implemented, you can exclude each request

You can specify the name of one parameter to retrieve in the url

You should specify the name of the model that you want use

```json
{
  "routes" : [
    {
      "path"                : "/users/:user_id",
      "alias"               : ["user"],
      "model"               : "User",
      "paramToRetrieve"     : "user_id",
      "requestExcluded"     : ["post"]
    }
  ]
}
```
