# 1.0.1 (2016-01-21)

- Update joi schema and update package

# 1.0.0 (2016-01-12)

- Add "app" to scope when binding subMethods

# 0.5.2 (2016-01-12)

- Update schema validation of joi

# 0.5.1 (2016-01-06)

- add possibilities to add endpoint in the api by passing an file

# 0.5.0 (2015-12-30)

- Optimization : use bind and apply instead of saving context
- Each subMethods have in his context the reference of the model

# 0.4.3 (2015-11-18)

- Add config object for each subMethods

# 0.4.2 (2015-11-18)

- Add filter on default route GET to remove default mongo field
- package update

# 0.4.1 (2015-11-18)

- Log each incoming route in the default middleware

# 0.4.0 (2015-11-18)

- Add default middleware that test if request comes from 'apidocjs', and if needed parse his data

# 0.3.0 (2015-11-09)

- The middleware doesn't use express.router now, an Instance of express (app) will be passed, to create all the routes.

# 0.2.4 (2015-11-09)

- when a PATCH comes in a default model route, if the param "id" is not defined, the request doesnt execute and a error status was returned

# 0.2.3 (2015-11-09)

- Add automatcally the var updated_date when a PATCH is called, before add it, we test if the param was defined

# 0.2.2 (2015-11-04)

- Add an verification step to determine if an request like '/accout/sync' is an subroot and not an id for the main root like '/account/:id'
- Add an verification for the main root that are the param 'id' like params, the id should be compose with 24 characters and/or digit

# 0.2.1 (2015-10-28)

- Change default response for default routes

# 0.2.0 (2015-10-15)

- Delete models part, now model should be bind by passing a yocto-mongoose object in init
