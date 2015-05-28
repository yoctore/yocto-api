/**
* 
* @api {get} /availability/:availability_id GET availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all availability, if you want get one availability you should specify his id, otherwise the whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} state state of the availability
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjecId]} [store_id]  store_id(s) of the availability
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} product_id product_id of the availability
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "[object Object]"
*           "store_id" : ["ObjecId"]
*           "product_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a availability"
*     }
* 
*     @apiError {String} error Failed get a availability
* 
*   
* 
*//**
* 
* @api {head} /availability/:availability_id HEAD of availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all availability, if you want get  the header of one availability you should specify his id, otherwise the header of whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a availability"
*     }
* 
*     @apiError {String} error Failed head a availability
* 
*   
* 
*//**
* 
* @api {post} /availability/ POST one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new availability in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} state state of the availability
*       
*     
*   
*     
*       
*         @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*       
*     
*   
*     
*       @apiParam {ObjectId} [product_id] product_id of the availability
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a availability"
*     }
* 
*     @apiError {String} error Failed post a availability
* 
*   
* 
*//**
* 
* @api {delete} /availability/:availability_id DELETE one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a availability"
*     }
* 
*     @apiError {String} error Failed delete a availability
* 
*   
* 
*//**
* 
* @api {patch} /availability/:availability_id PATCH one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [state] state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a availability"
*     }
* 
*     @apiError {String} error Failed patch a availability
* 
*   
* 
*//**
* 
* @api {put} /availability/:availability_id PUT one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} state state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a availability"
*     }
* 
*     @apiError {String} error Failed put a availability
* 
*   
* 
*//**
* 
* @api {get} /availability/:availability_id GET availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all availability, if you want get one availability you should specify his id, otherwise the whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} state state of the availability
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjecId]} [store_id]  store_id(s) of the availability
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} product_id product_id of the availability
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "[object Object]"
*           "store_id" : ["ObjecId"]
*           "product_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a availability"
*     }
* 
*     @apiError {String} error Failed get a availability
* 
*   
* 
*//**
* 
* @api {head} /availability/:availability_id HEAD of availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all availability, if you want get  the header of one availability you should specify his id, otherwise the header of whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a availability"
*     }
* 
*     @apiError {String} error Failed head a availability
* 
*   
* 
*//**
* 
* @api {post} /availability/ POST one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new availability in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} state state of the availability
*       
*     
*   
*     
*       
*         @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*       
*     
*   
*     
*       @apiParam {ObjectId} [product_id] product_id of the availability
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a availability"
*     }
* 
*     @apiError {String} error Failed post a availability
* 
*   
* 
*//**
* 
* @api {delete} /availability/:availability_id DELETE one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a availability"
*     }
* 
*     @apiError {String} error Failed delete a availability
* 
*   
* 
*//**
* 
* @api {patch} /availability/:availability_id PATCH one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [state] state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a availability"
*     }
* 
*     @apiError {String} error Failed patch a availability
* 
*   
* 
*//**
* 
* @api {put} /availability/:availability_id PUT one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} state state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a availability"
*     }
* 
*     @apiError {String} error Failed put a availability
* 
*   
* 
*//**
* 
* @api {get} /bill/:bill_id GET bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all bill, if you want get one bill you should specify his id, otherwise the whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} state state of the bill
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the bill
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the bill
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "String"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a bill"
*     }
* 
*     @apiError {String} error Failed get a bill
* 
*   
* 
*//**
* 
* @api {head} /bill/:bill_id HEAD of bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all bill, if you want get  the header of one bill you should specify his id, otherwise the header of whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a bill"
*     }
* 
*     @apiError {String} error Failed head a bill
* 
*   
* 
*//**
* 
* @api {post} /bill/ POST one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new bill in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [state] state of the bill
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the bill
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a bill"
*     }
* 
*     @apiError {String} error Failed post a bill
* 
*   
* 
*//**
* 
* @api {delete} /bill/:bill_id DELETE one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a bill"
*     }
* 
*     @apiError {String} error Failed delete a bill
* 
*   
* 
*//**
* 
* @api {patch} /bill/:bill_id PATCH one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a bill"
*     }
* 
*     @apiError {String} error Failed patch a bill
* 
*   
* 
*//**
* 
* @api {put} /bill/:bill_id PUT one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a bill"
*     }
* 
*     @apiError {String} error Failed put a bill
* 
*   
* 
*//**
* 
* @api {get} /availability/:availability_id GET availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all availability, if you want get one availability you should specify his id, otherwise the whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} state state of the availability
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjecId]} [store_id]  store_id(s) of the availability
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} product_id product_id of the availability
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "[object Object]"
*           "store_id" : ["ObjecId"]
*           "product_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a availability"
*     }
* 
*     @apiError {String} error Failed get a availability
* 
*   
* 
*//**
* 
* @api {head} /availability/:availability_id HEAD of availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all availability, if you want get  the header of one availability you should specify his id, otherwise the header of whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a availability"
*     }
* 
*     @apiError {String} error Failed head a availability
* 
*   
* 
*//**
* 
* @api {post} /availability/ POST one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new availability in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} state state of the availability
*       
*     
*   
*     
*       
*         @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*       
*     
*   
*     
*       @apiParam {ObjectId} [product_id] product_id of the availability
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a availability"
*     }
* 
*     @apiError {String} error Failed post a availability
* 
*   
* 
*//**
* 
* @api {delete} /availability/:availability_id DELETE one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a availability"
*     }
* 
*     @apiError {String} error Failed delete a availability
* 
*   
* 
*//**
* 
* @api {patch} /availability/:availability_id PATCH one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [state] state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a availability"
*     }
* 
*     @apiError {String} error Failed patch a availability
* 
*   
* 
*//**
* 
* @api {put} /availability/:availability_id PUT one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} state state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a availability"
*     }
* 
*     @apiError {String} error Failed put a availability
* 
*   
* 
*//**
* 
* @api {get} /bill/:bill_id GET bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all bill, if you want get one bill you should specify his id, otherwise the whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} state state of the bill
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the bill
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the bill
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "String"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a bill"
*     }
* 
*     @apiError {String} error Failed get a bill
* 
*   
* 
*//**
* 
* @api {head} /bill/:bill_id HEAD of bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all bill, if you want get  the header of one bill you should specify his id, otherwise the header of whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a bill"
*     }
* 
*     @apiError {String} error Failed head a bill
* 
*   
* 
*//**
* 
* @api {post} /bill/ POST one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new bill in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [state] state of the bill
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the bill
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a bill"
*     }
* 
*     @apiError {String} error Failed post a bill
* 
*   
* 
*//**
* 
* @api {delete} /bill/:bill_id DELETE one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a bill"
*     }
* 
*     @apiError {String} error Failed delete a bill
* 
*   
* 
*//**
* 
* @api {patch} /bill/:bill_id PATCH one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a bill"
*     }
* 
*     @apiError {String} error Failed patch a bill
* 
*   
* 
*//**
* 
* @api {put} /bill/:bill_id PUT one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a bill"
*     }
* 
*     @apiError {String} error Failed put a bill
* 
*   
* 
*//**
* 
* @api {get} /cart/:cart_id GET cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all cart, if you want get one cart you should specify his id, otherwise the whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the cart
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the cart
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the cart
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a cart"
*     }
* 
*     @apiError {String} error Failed get a cart
* 
*   
* 
*//**
* 
* @api {head} /cart/:cart_id HEAD of cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all cart, if you want get  the header of one cart you should specify his id, otherwise the header of whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a cart"
*     }
* 
*     @apiError {String} error Failed head a cart
* 
*   
* 
*//**
* 
* @api {post} /cart/ POST one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new cart in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the cart
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the cart
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a cart"
*     }
* 
*     @apiError {String} error Failed post a cart
* 
*   
* 
*//**
* 
* @api {delete} /cart/:cart_id DELETE one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a cart"
*     }
* 
*     @apiError {String} error Failed delete a cart
* 
*   
* 
*//**
* 
* @api {patch} /cart/:cart_id PATCH one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a cart"
*     }
* 
*     @apiError {String} error Failed patch a cart
* 
*   
* 
*//**
* 
* @api {put} /cart/:cart_id PUT one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a cart"
*     }
* 
*     @apiError {String} error Failed put a cart
* 
*   
* 
*//**
* 
* @api {get} /availability/:availability_id GET availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all availability, if you want get one availability you should specify his id, otherwise the whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} state state of the availability
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjecId]} [store_id]  store_id(s) of the availability
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} product_id product_id of the availability
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "[object Object]"
*           "store_id" : ["ObjecId"]
*           "product_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a availability"
*     }
* 
*     @apiError {String} error Failed get a availability
* 
*   
* 
*//**
* 
* @api {head} /availability/:availability_id HEAD of availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all availability, if you want get  the header of one availability you should specify his id, otherwise the header of whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a availability"
*     }
* 
*     @apiError {String} error Failed head a availability
* 
*   
* 
*//**
* 
* @api {post} /availability/ POST one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new availability in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} state state of the availability
*       
*     
*   
*     
*       
*         @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*       
*     
*   
*     
*       @apiParam {ObjectId} [product_id] product_id of the availability
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a availability"
*     }
* 
*     @apiError {String} error Failed post a availability
* 
*   
* 
*//**
* 
* @api {delete} /availability/:availability_id DELETE one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a availability"
*     }
* 
*     @apiError {String} error Failed delete a availability
* 
*   
* 
*//**
* 
* @api {patch} /availability/:availability_id PATCH one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [state] state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a availability"
*     }
* 
*     @apiError {String} error Failed patch a availability
* 
*   
* 
*//**
* 
* @api {put} /availability/:availability_id PUT one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} state state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a availability"
*     }
* 
*     @apiError {String} error Failed put a availability
* 
*   
* 
*//**
* 
* @api {get} /bill/:bill_id GET bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all bill, if you want get one bill you should specify his id, otherwise the whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} state state of the bill
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the bill
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the bill
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "String"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a bill"
*     }
* 
*     @apiError {String} error Failed get a bill
* 
*   
* 
*//**
* 
* @api {head} /bill/:bill_id HEAD of bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all bill, if you want get  the header of one bill you should specify his id, otherwise the header of whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a bill"
*     }
* 
*     @apiError {String} error Failed head a bill
* 
*   
* 
*//**
* 
* @api {post} /bill/ POST one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new bill in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [state] state of the bill
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the bill
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a bill"
*     }
* 
*     @apiError {String} error Failed post a bill
* 
*   
* 
*//**
* 
* @api {delete} /bill/:bill_id DELETE one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a bill"
*     }
* 
*     @apiError {String} error Failed delete a bill
* 
*   
* 
*//**
* 
* @api {patch} /bill/:bill_id PATCH one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a bill"
*     }
* 
*     @apiError {String} error Failed patch a bill
* 
*   
* 
*//**
* 
* @api {put} /bill/:bill_id PUT one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a bill"
*     }
* 
*     @apiError {String} error Failed put a bill
* 
*   
* 
*//**
* 
* @api {get} /cart/:cart_id GET cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all cart, if you want get one cart you should specify his id, otherwise the whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the cart
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the cart
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the cart
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a cart"
*     }
* 
*     @apiError {String} error Failed get a cart
* 
*   
* 
*//**
* 
* @api {head} /cart/:cart_id HEAD of cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all cart, if you want get  the header of one cart you should specify his id, otherwise the header of whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a cart"
*     }
* 
*     @apiError {String} error Failed head a cart
* 
*   
* 
*//**
* 
* @api {post} /cart/ POST one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new cart in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the cart
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the cart
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a cart"
*     }
* 
*     @apiError {String} error Failed post a cart
* 
*   
* 
*//**
* 
* @api {delete} /cart/:cart_id DELETE one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a cart"
*     }
* 
*     @apiError {String} error Failed delete a cart
* 
*   
* 
*//**
* 
* @api {patch} /cart/:cart_id PATCH one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a cart"
*     }
* 
*     @apiError {String} error Failed patch a cart
* 
*   
* 
*//**
* 
* @api {put} /cart/:cart_id PUT one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a cart"
*     }
* 
*     @apiError {String} error Failed put a cart
* 
*   
* 
*//**
* 
* @api {get} /category/:category_id GET category(s)
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all category, if you want get one category you should specify his id, otherwise the whole categorys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} name name of the category
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [category_id]  category_id(s) of the category
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "String"
*           "category_id" : ["ObjectId"]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a category"
*     }
* 
*     @apiError {String} error Failed get a category
* 
*   
* 
*//**
* 
* @api {head} /category/:category_id HEAD of category(s)
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all category, if you want get  the header of one category you should specify his id, otherwise the header of whole categorys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a category"
*     }
* 
*     @apiError {String} error Failed head a category
* 
*   
* 
*//**
* 
* @api {post} /category/ POST one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new category in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [name] name of the category
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a category"
*     }
* 
*     @apiError {String} error Failed post a category
* 
*   
* 
*//**
* 
* @api {delete} /category/:category_id DELETE one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a category"
*     }
* 
*     @apiError {String} error Failed delete a category
* 
*   
* 
*//**
* 
* @api {patch} /category/:category_id PATCH one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the category
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a category"
*     }
* 
*     @apiError {String} error Failed patch a category
* 
*   
* 
*//**
* 
* @api {put} /category/:category_id PUT one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the category
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a category"
*     }
* 
*     @apiError {String} error Failed put a category
* 
*   
* 
*//**
* 
* @api {get} /availability/:availability_id GET availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all availability, if you want get one availability you should specify his id, otherwise the whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} state state of the availability
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjecId]} [store_id]  store_id(s) of the availability
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} product_id product_id of the availability
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "[object Object]"
*           "store_id" : ["ObjecId"]
*           "product_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a availability"
*     }
* 
*     @apiError {String} error Failed get a availability
* 
*   
* 
*//**
* 
* @api {head} /availability/:availability_id HEAD of availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all availability, if you want get  the header of one availability you should specify his id, otherwise the header of whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a availability"
*     }
* 
*     @apiError {String} error Failed head a availability
* 
*   
* 
*//**
* 
* @api {post} /availability/ POST one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new availability in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} state state of the availability
*       
*     
*   
*     
*       
*         @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*       
*     
*   
*     
*       @apiParam {ObjectId} [product_id] product_id of the availability
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a availability"
*     }
* 
*     @apiError {String} error Failed post a availability
* 
*   
* 
*//**
* 
* @api {delete} /availability/:availability_id DELETE one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a availability"
*     }
* 
*     @apiError {String} error Failed delete a availability
* 
*   
* 
*//**
* 
* @api {patch} /availability/:availability_id PATCH one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [state] state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a availability"
*     }
* 
*     @apiError {String} error Failed patch a availability
* 
*   
* 
*//**
* 
* @api {put} /availability/:availability_id PUT one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} state state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a availability"
*     }
* 
*     @apiError {String} error Failed put a availability
* 
*   
* 
*//**
* 
* @api {get} /bill/:bill_id GET bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all bill, if you want get one bill you should specify his id, otherwise the whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} state state of the bill
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the bill
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the bill
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "String"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a bill"
*     }
* 
*     @apiError {String} error Failed get a bill
* 
*   
* 
*//**
* 
* @api {head} /bill/:bill_id HEAD of bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all bill, if you want get  the header of one bill you should specify his id, otherwise the header of whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a bill"
*     }
* 
*     @apiError {String} error Failed head a bill
* 
*   
* 
*//**
* 
* @api {post} /bill/ POST one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new bill in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [state] state of the bill
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the bill
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a bill"
*     }
* 
*     @apiError {String} error Failed post a bill
* 
*   
* 
*//**
* 
* @api {delete} /bill/:bill_id DELETE one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a bill"
*     }
* 
*     @apiError {String} error Failed delete a bill
* 
*   
* 
*//**
* 
* @api {patch} /bill/:bill_id PATCH one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a bill"
*     }
* 
*     @apiError {String} error Failed patch a bill
* 
*   
* 
*//**
* 
* @api {put} /bill/:bill_id PUT one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a bill"
*     }
* 
*     @apiError {String} error Failed put a bill
* 
*   
* 
*//**
* 
* @api {get} /cart/:cart_id GET cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all cart, if you want get one cart you should specify his id, otherwise the whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the cart
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the cart
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the cart
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a cart"
*     }
* 
*     @apiError {String} error Failed get a cart
* 
*   
* 
*//**
* 
* @api {head} /cart/:cart_id HEAD of cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all cart, if you want get  the header of one cart you should specify his id, otherwise the header of whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a cart"
*     }
* 
*     @apiError {String} error Failed head a cart
* 
*   
* 
*//**
* 
* @api {post} /cart/ POST one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new cart in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the cart
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the cart
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a cart"
*     }
* 
*     @apiError {String} error Failed post a cart
* 
*   
* 
*//**
* 
* @api {delete} /cart/:cart_id DELETE one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a cart"
*     }
* 
*     @apiError {String} error Failed delete a cart
* 
*   
* 
*//**
* 
* @api {patch} /cart/:cart_id PATCH one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a cart"
*     }
* 
*     @apiError {String} error Failed patch a cart
* 
*   
* 
*//**
* 
* @api {put} /cart/:cart_id PUT one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a cart"
*     }
* 
*     @apiError {String} error Failed put a cart
* 
*   
* 
*//**
* 
* @api {get} /category/:category_id GET category(s)
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all category, if you want get one category you should specify his id, otherwise the whole categorys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} name name of the category
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [category_id]  category_id(s) of the category
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "String"
*           "category_id" : ["ObjectId"]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a category"
*     }
* 
*     @apiError {String} error Failed get a category
* 
*   
* 
*//**
* 
* @api {head} /category/:category_id HEAD of category(s)
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all category, if you want get  the header of one category you should specify his id, otherwise the header of whole categorys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a category"
*     }
* 
*     @apiError {String} error Failed head a category
* 
*   
* 
*//**
* 
* @api {post} /category/ POST one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new category in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [name] name of the category
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a category"
*     }
* 
*     @apiError {String} error Failed post a category
* 
*   
* 
*//**
* 
* @api {delete} /category/:category_id DELETE one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a category"
*     }
* 
*     @apiError {String} error Failed delete a category
* 
*   
* 
*//**
* 
* @api {patch} /category/:category_id PATCH one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the category
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a category"
*     }
* 
*     @apiError {String} error Failed patch a category
* 
*   
* 
*//**
* 
* @api {put} /category/:category_id PUT one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the category
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a category"
*     }
* 
*     @apiError {String} error Failed put a category
* 
*   
* 
*//**
* 
* @api {get} /order/:order_id GET order(s)
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all order, if you want get one order you should specify his id, otherwise the whole orders are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [order_id]  order_id(s) of the order
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} name name of the order
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the order
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} transaction_id transaction_id of the order
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "String"
*           "product_id" : ["ObjectId"]
*           "transaction_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a order"
*     }
* 
*     @apiError {String} error Failed get a order
* 
*   
* 
*//**
* 
* @api {head} /order/:order_id HEAD of order(s)
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all order, if you want get  the header of one order you should specify his id, otherwise the header of whole orders are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [order_id]  order_id(s) of the order
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a order"
*     }
* 
*     @apiError {String} error Failed head a order
* 
*   
* 
*//**
* 
* @api {post} /order/ POST one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new order in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [name] name of the order
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*       
*     
*   
*     
*       @apiParam {ObjectId} [transaction_id] transaction_id of the order
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a order"
*     }
* 
*     @apiError {String} error Failed post a order
* 
*   
* 
*//**
* 
* @api {delete} /order/:order_id DELETE one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a order"
*     }
* 
*     @apiError {String} error Failed delete a order
* 
*   
* 
*//**
* 
* @api {patch} /order/:order_id PATCH one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the order
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*         
*       
*     
*       
*         @apiParam {ObjectId} [transaction_id] transaction_id of the order
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a order"
*     }
* 
*     @apiError {String} error Failed patch a order
* 
*   
* 
*//**
* 
* @api {put} /order/:order_id PUT one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the order
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*         
*       
*     
*       
*         @apiParam {ObjectId} [transaction_id] transaction_id of the order
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a order"
*     }
* 
*     @apiError {String} error Failed put a order
* 
*   
* 
*//**
* 
* @api {get} /availability/:availability_id GET availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all availability, if you want get one availability you should specify his id, otherwise the whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} state state of the availability
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjecId]} [store_id]  store_id(s) of the availability
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} product_id product_id of the availability
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "[object Object]"
*           "store_id" : ["ObjecId"]
*           "product_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a availability"
*     }
* 
*     @apiError {String} error Failed get a availability
* 
*   
* 
*//**
* 
* @api {head} /availability/:availability_id HEAD of availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all availability, if you want get  the header of one availability you should specify his id, otherwise the header of whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a availability"
*     }
* 
*     @apiError {String} error Failed head a availability
* 
*   
* 
*//**
* 
* @api {post} /availability/ POST one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new availability in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} state state of the availability
*       
*     
*   
*     
*       
*         @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*       
*     
*   
*     
*       @apiParam {ObjectId} [product_id] product_id of the availability
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a availability"
*     }
* 
*     @apiError {String} error Failed post a availability
* 
*   
* 
*//**
* 
* @api {delete} /availability/:availability_id DELETE one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a availability"
*     }
* 
*     @apiError {String} error Failed delete a availability
* 
*   
* 
*//**
* 
* @api {patch} /availability/:availability_id PATCH one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [state] state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a availability"
*     }
* 
*     @apiError {String} error Failed patch a availability
* 
*   
* 
*//**
* 
* @api {put} /availability/:availability_id PUT one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} state state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a availability"
*     }
* 
*     @apiError {String} error Failed put a availability
* 
*   
* 
*//**
* 
* @api {get} /bill/:bill_id GET bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all bill, if you want get one bill you should specify his id, otherwise the whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} state state of the bill
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the bill
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the bill
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "String"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a bill"
*     }
* 
*     @apiError {String} error Failed get a bill
* 
*   
* 
*//**
* 
* @api {head} /bill/:bill_id HEAD of bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all bill, if you want get  the header of one bill you should specify his id, otherwise the header of whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a bill"
*     }
* 
*     @apiError {String} error Failed head a bill
* 
*   
* 
*//**
* 
* @api {post} /bill/ POST one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new bill in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [state] state of the bill
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the bill
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a bill"
*     }
* 
*     @apiError {String} error Failed post a bill
* 
*   
* 
*//**
* 
* @api {delete} /bill/:bill_id DELETE one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a bill"
*     }
* 
*     @apiError {String} error Failed delete a bill
* 
*   
* 
*//**
* 
* @api {patch} /bill/:bill_id PATCH one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a bill"
*     }
* 
*     @apiError {String} error Failed patch a bill
* 
*   
* 
*//**
* 
* @api {put} /bill/:bill_id PUT one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a bill"
*     }
* 
*     @apiError {String} error Failed put a bill
* 
*   
* 
*//**
* 
* @api {get} /cart/:cart_id GET cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all cart, if you want get one cart you should specify his id, otherwise the whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the cart
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the cart
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the cart
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a cart"
*     }
* 
*     @apiError {String} error Failed get a cart
* 
*   
* 
*//**
* 
* @api {head} /cart/:cart_id HEAD of cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all cart, if you want get  the header of one cart you should specify his id, otherwise the header of whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a cart"
*     }
* 
*     @apiError {String} error Failed head a cart
* 
*   
* 
*//**
* 
* @api {post} /cart/ POST one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new cart in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the cart
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the cart
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a cart"
*     }
* 
*     @apiError {String} error Failed post a cart
* 
*   
* 
*//**
* 
* @api {delete} /cart/:cart_id DELETE one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a cart"
*     }
* 
*     @apiError {String} error Failed delete a cart
* 
*   
* 
*//**
* 
* @api {patch} /cart/:cart_id PATCH one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a cart"
*     }
* 
*     @apiError {String} error Failed patch a cart
* 
*   
* 
*//**
* 
* @api {put} /cart/:cart_id PUT one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a cart"
*     }
* 
*     @apiError {String} error Failed put a cart
* 
*   
* 
*//**
* 
* @api {get} /category/:category_id GET category(s)
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all category, if you want get one category you should specify his id, otherwise the whole categorys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} name name of the category
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [category_id]  category_id(s) of the category
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "String"
*           "category_id" : ["ObjectId"]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a category"
*     }
* 
*     @apiError {String} error Failed get a category
* 
*   
* 
*//**
* 
* @api {head} /category/:category_id HEAD of category(s)
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all category, if you want get  the header of one category you should specify his id, otherwise the header of whole categorys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a category"
*     }
* 
*     @apiError {String} error Failed head a category
* 
*   
* 
*//**
* 
* @api {post} /category/ POST one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new category in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [name] name of the category
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a category"
*     }
* 
*     @apiError {String} error Failed post a category
* 
*   
* 
*//**
* 
* @api {delete} /category/:category_id DELETE one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a category"
*     }
* 
*     @apiError {String} error Failed delete a category
* 
*   
* 
*//**
* 
* @api {patch} /category/:category_id PATCH one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the category
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a category"
*     }
* 
*     @apiError {String} error Failed patch a category
* 
*   
* 
*//**
* 
* @api {put} /category/:category_id PUT one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the category
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a category"
*     }
* 
*     @apiError {String} error Failed put a category
* 
*   
* 
*//**
* 
* @api {get} /order/:order_id GET order(s)
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all order, if you want get one order you should specify his id, otherwise the whole orders are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [order_id]  order_id(s) of the order
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} name name of the order
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the order
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} transaction_id transaction_id of the order
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "String"
*           "product_id" : ["ObjectId"]
*           "transaction_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a order"
*     }
* 
*     @apiError {String} error Failed get a order
* 
*   
* 
*//**
* 
* @api {head} /order/:order_id HEAD of order(s)
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all order, if you want get  the header of one order you should specify his id, otherwise the header of whole orders are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [order_id]  order_id(s) of the order
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a order"
*     }
* 
*     @apiError {String} error Failed head a order
* 
*   
* 
*//**
* 
* @api {post} /order/ POST one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new order in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [name] name of the order
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*       
*     
*   
*     
*       @apiParam {ObjectId} [transaction_id] transaction_id of the order
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a order"
*     }
* 
*     @apiError {String} error Failed post a order
* 
*   
* 
*//**
* 
* @api {delete} /order/:order_id DELETE one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a order"
*     }
* 
*     @apiError {String} error Failed delete a order
* 
*   
* 
*//**
* 
* @api {patch} /order/:order_id PATCH one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the order
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*         
*       
*     
*       
*         @apiParam {ObjectId} [transaction_id] transaction_id of the order
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a order"
*     }
* 
*     @apiError {String} error Failed patch a order
* 
*   
* 
*//**
* 
* @api {put} /order/:order_id PUT one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the order
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*         
*       
*     
*       
*         @apiParam {ObjectId} [transaction_id] transaction_id of the order
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a order"
*     }
* 
*     @apiError {String} error Failed put a order
* 
*   
* 
*//**
* 
* @api {get} /product/:product_id GET product(s)
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all product, if you want get one product you should specify his id, otherwise the whole products are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [product_id]  product_id(s) of the product
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the product
*               
* 
*           
*         
* 
*           
*               
*                   @apiSuccess {String} reference reference of the product
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [availability_id]  availability_id(s) of the product
*             
* 
*             
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} category_id  category_id(s) of the product
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]""reference" : "[object Object]"
*           "availability_id" : ["ObjectId"]
*           
*           "category_id" : [""]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a product"
*     }
* 
*     @apiError {String} error Failed get a product
* 
*   
* 
*//**
* 
* @api {head} /product/:product_id HEAD of product(s)
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all product, if you want get  the header of one product you should specify his id, otherwise the header of whole products are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [product_id]  product_id(s) of the product
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a product"
*     }
* 
*     @apiError {String} error Failed head a product
* 
*   
* 
*//**
* 
* @api {post} /product/ POST one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new product in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the product
*       
*     
*   
*     
*       
*           @apiParam {String} reference reference of the product
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} category_id  category_id(s) of the product
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a product"
*     }
* 
*     @apiError {String} error Failed post a product
* 
*   
* 
*//**
* 
* @api {delete} /product/:product_id DELETE one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a product"
*     }
* 
*     @apiError {String} error Failed delete a product
* 
*   
* 
*//**
* 
* @api {patch} /product/:product_id PATCH one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the product
*           
*       
*     
*       
*         
*             @apiParam {String} [reference] reference of the product
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*         
*       
*     
*       
*         
*           @apiParam {[ObjectId]} category_id  category_id(s) of the product
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a product"
*     }
* 
*     @apiError {String} error Failed patch a product
* 
*   
* 
*//**
* 
* @api {put} /product/:product_id PUT one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the product
*           
*       
*     
*       
*         
*             @apiParam {String} reference reference of the product
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*         
*       
*     
*       
*         
*           @apiParam {[ObjectId]} category_id  category_id(s) of the product
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a product"
*     }
* 
*     @apiError {String} error Failed put a product
* 
*   
* 
*//**
* 
* @api {get} /availability/:availability_id GET availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all availability, if you want get one availability you should specify his id, otherwise the whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} state state of the availability
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjecId]} [store_id]  store_id(s) of the availability
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} product_id product_id of the availability
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "[object Object]"
*           "store_id" : ["ObjecId"]
*           "product_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a availability"
*     }
* 
*     @apiError {String} error Failed get a availability
* 
*   
* 
*//**
* 
* @api {head} /availability/:availability_id HEAD of availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all availability, if you want get  the header of one availability you should specify his id, otherwise the header of whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a availability"
*     }
* 
*     @apiError {String} error Failed head a availability
* 
*   
* 
*//**
* 
* @api {post} /availability/ POST one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new availability in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} state state of the availability
*       
*     
*   
*     
*       
*         @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*       
*     
*   
*     
*       @apiParam {ObjectId} [product_id] product_id of the availability
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a availability"
*     }
* 
*     @apiError {String} error Failed post a availability
* 
*   
* 
*//**
* 
* @api {delete} /availability/:availability_id DELETE one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a availability"
*     }
* 
*     @apiError {String} error Failed delete a availability
* 
*   
* 
*//**
* 
* @api {patch} /availability/:availability_id PATCH one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [state] state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a availability"
*     }
* 
*     @apiError {String} error Failed patch a availability
* 
*   
* 
*//**
* 
* @api {put} /availability/:availability_id PUT one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} state state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a availability"
*     }
* 
*     @apiError {String} error Failed put a availability
* 
*   
* 
*//**
* 
* @api {get} /bill/:bill_id GET bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all bill, if you want get one bill you should specify his id, otherwise the whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} state state of the bill
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the bill
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the bill
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "String"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a bill"
*     }
* 
*     @apiError {String} error Failed get a bill
* 
*   
* 
*//**
* 
* @api {head} /bill/:bill_id HEAD of bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all bill, if you want get  the header of one bill you should specify his id, otherwise the header of whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a bill"
*     }
* 
*     @apiError {String} error Failed head a bill
* 
*   
* 
*//**
* 
* @api {post} /bill/ POST one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new bill in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [state] state of the bill
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the bill
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a bill"
*     }
* 
*     @apiError {String} error Failed post a bill
* 
*   
* 
*//**
* 
* @api {delete} /bill/:bill_id DELETE one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a bill"
*     }
* 
*     @apiError {String} error Failed delete a bill
* 
*   
* 
*//**
* 
* @api {patch} /bill/:bill_id PATCH one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a bill"
*     }
* 
*     @apiError {String} error Failed patch a bill
* 
*   
* 
*//**
* 
* @api {put} /bill/:bill_id PUT one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a bill"
*     }
* 
*     @apiError {String} error Failed put a bill
* 
*   
* 
*//**
* 
* @api {get} /cart/:cart_id GET cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all cart, if you want get one cart you should specify his id, otherwise the whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the cart
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the cart
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the cart
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a cart"
*     }
* 
*     @apiError {String} error Failed get a cart
* 
*   
* 
*//**
* 
* @api {head} /cart/:cart_id HEAD of cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all cart, if you want get  the header of one cart you should specify his id, otherwise the header of whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a cart"
*     }
* 
*     @apiError {String} error Failed head a cart
* 
*   
* 
*//**
* 
* @api {post} /cart/ POST one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new cart in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the cart
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the cart
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a cart"
*     }
* 
*     @apiError {String} error Failed post a cart
* 
*   
* 
*//**
* 
* @api {delete} /cart/:cart_id DELETE one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a cart"
*     }
* 
*     @apiError {String} error Failed delete a cart
* 
*   
* 
*//**
* 
* @api {patch} /cart/:cart_id PATCH one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a cart"
*     }
* 
*     @apiError {String} error Failed patch a cart
* 
*   
* 
*//**
* 
* @api {put} /cart/:cart_id PUT one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a cart"
*     }
* 
*     @apiError {String} error Failed put a cart
* 
*   
* 
*//**
* 
* @api {get} /category/:category_id GET category(s)
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all category, if you want get one category you should specify his id, otherwise the whole categorys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} name name of the category
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [category_id]  category_id(s) of the category
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "String"
*           "category_id" : ["ObjectId"]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a category"
*     }
* 
*     @apiError {String} error Failed get a category
* 
*   
* 
*//**
* 
* @api {head} /category/:category_id HEAD of category(s)
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all category, if you want get  the header of one category you should specify his id, otherwise the header of whole categorys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a category"
*     }
* 
*     @apiError {String} error Failed head a category
* 
*   
* 
*//**
* 
* @api {post} /category/ POST one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new category in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [name] name of the category
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a category"
*     }
* 
*     @apiError {String} error Failed post a category
* 
*   
* 
*//**
* 
* @api {delete} /category/:category_id DELETE one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a category"
*     }
* 
*     @apiError {String} error Failed delete a category
* 
*   
* 
*//**
* 
* @api {patch} /category/:category_id PATCH one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the category
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a category"
*     }
* 
*     @apiError {String} error Failed patch a category
* 
*   
* 
*//**
* 
* @api {put} /category/:category_id PUT one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the category
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a category"
*     }
* 
*     @apiError {String} error Failed put a category
* 
*   
* 
*//**
* 
* @api {get} /order/:order_id GET order(s)
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all order, if you want get one order you should specify his id, otherwise the whole orders are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [order_id]  order_id(s) of the order
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} name name of the order
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the order
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} transaction_id transaction_id of the order
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "String"
*           "product_id" : ["ObjectId"]
*           "transaction_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a order"
*     }
* 
*     @apiError {String} error Failed get a order
* 
*   
* 
*//**
* 
* @api {head} /order/:order_id HEAD of order(s)
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all order, if you want get  the header of one order you should specify his id, otherwise the header of whole orders are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [order_id]  order_id(s) of the order
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a order"
*     }
* 
*     @apiError {String} error Failed head a order
* 
*   
* 
*//**
* 
* @api {post} /order/ POST one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new order in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [name] name of the order
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*       
*     
*   
*     
*       @apiParam {ObjectId} [transaction_id] transaction_id of the order
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a order"
*     }
* 
*     @apiError {String} error Failed post a order
* 
*   
* 
*//**
* 
* @api {delete} /order/:order_id DELETE one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a order"
*     }
* 
*     @apiError {String} error Failed delete a order
* 
*   
* 
*//**
* 
* @api {patch} /order/:order_id PATCH one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the order
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*         
*       
*     
*       
*         @apiParam {ObjectId} [transaction_id] transaction_id of the order
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a order"
*     }
* 
*     @apiError {String} error Failed patch a order
* 
*   
* 
*//**
* 
* @api {put} /order/:order_id PUT one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the order
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*         
*       
*     
*       
*         @apiParam {ObjectId} [transaction_id] transaction_id of the order
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a order"
*     }
* 
*     @apiError {String} error Failed put a order
* 
*   
* 
*//**
* 
* @api {get} /product/:product_id GET product(s)
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all product, if you want get one product you should specify his id, otherwise the whole products are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [product_id]  product_id(s) of the product
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the product
*               
* 
*           
*         
* 
*           
*               
*                   @apiSuccess {String} reference reference of the product
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [availability_id]  availability_id(s) of the product
*             
* 
*             
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} category_id  category_id(s) of the product
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]""reference" : "[object Object]"
*           "availability_id" : ["ObjectId"]
*           
*           "category_id" : [""]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a product"
*     }
* 
*     @apiError {String} error Failed get a product
* 
*   
* 
*//**
* 
* @api {head} /product/:product_id HEAD of product(s)
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all product, if you want get  the header of one product you should specify his id, otherwise the header of whole products are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [product_id]  product_id(s) of the product
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a product"
*     }
* 
*     @apiError {String} error Failed head a product
* 
*   
* 
*//**
* 
* @api {post} /product/ POST one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new product in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the product
*       
*     
*   
*     
*       
*           @apiParam {String} reference reference of the product
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} category_id  category_id(s) of the product
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a product"
*     }
* 
*     @apiError {String} error Failed post a product
* 
*   
* 
*//**
* 
* @api {delete} /product/:product_id DELETE one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a product"
*     }
* 
*     @apiError {String} error Failed delete a product
* 
*   
* 
*//**
* 
* @api {patch} /product/:product_id PATCH one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the product
*           
*       
*     
*       
*         
*             @apiParam {String} [reference] reference of the product
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*         
*       
*     
*       
*         
*           @apiParam {[ObjectId]} category_id  category_id(s) of the product
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a product"
*     }
* 
*     @apiError {String} error Failed patch a product
* 
*   
* 
*//**
* 
* @api {put} /product/:product_id PUT one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the product
*           
*       
*     
*       
*         
*             @apiParam {String} reference reference of the product
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*         
*       
*     
*       
*         
*           @apiParam {[ObjectId]} category_id  category_id(s) of the product
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a product"
*     }
* 
*     @apiError {String} error Failed put a product
* 
*   
* 
*//**
* 
* @api {get} /store/:store_id GET store(s)
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all store, if you want get one store you should specify his id, otherwise the whole stores are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [store_id]  store_id(s) of the store
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} storeBrand_id storeBrand_id of the store
*           
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the store
*               
* 
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "storeBrand_id" : "String""name" : "[object Object]"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a store"
*     }
* 
*     @apiError {String} error Failed get a store
* 
*   
* 
*//**
* 
* @api {head} /store/:store_id HEAD of store(s)
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all store, if you want get  the header of one store you should specify his id, otherwise the header of whole stores are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [store_id]  store_id(s) of the store
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a store"
*     }
* 
*     @apiError {String} error Failed head a store
* 
*   
* 
*//**
* 
* @api {post} /store/ POST one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new store in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [storeBrand_id] storeBrand_id of the store
*     
*   
*     
*       
*           @apiParam {String} name name of the store
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a store"
*     }
* 
*     @apiError {String} error Failed post a store
* 
*   
* 
*//**
* 
* @api {delete} /store/:store_id DELETE one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a store in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} store_id  store_id(s) of the store
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a store"
*     }
* 
*     @apiError {String} error Failed delete a store
* 
*   
* 
*//**
* 
* @api {patch} /store/:store_id PATCH one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to store in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} store_id  store_id(s) of the store
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [storeBrand_id] storeBrand_id of the store
*       
*     
*       
*         
*             @apiParam {String} [name] name of the store
*           
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a store"
*     }
* 
*     @apiError {String} error Failed patch a store
* 
*   
* 
*//**
* 
* @api {put} /store/:store_id PUT one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a store in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} store_id  store_id(s) of the store
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [storeBrand_id] storeBrand_id of the store
*       
*     
*       
*         
*             @apiParam {String} name name of the store
*           
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a store"
*     }
* 
*     @apiError {String} error Failed put a store
* 
*   
* 
*//**
* 
* @api {get} /availability/:availability_id GET availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all availability, if you want get one availability you should specify his id, otherwise the whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} state state of the availability
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjecId]} [store_id]  store_id(s) of the availability
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} product_id product_id of the availability
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "[object Object]"
*           "store_id" : ["ObjecId"]
*           "product_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a availability"
*     }
* 
*     @apiError {String} error Failed get a availability
* 
*   
* 
*//**
* 
* @api {head} /availability/:availability_id HEAD of availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all availability, if you want get  the header of one availability you should specify his id, otherwise the header of whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a availability"
*     }
* 
*     @apiError {String} error Failed head a availability
* 
*   
* 
*//**
* 
* @api {post} /availability/ POST one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new availability in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} state state of the availability
*       
*     
*   
*     
*       
*         @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*       
*     
*   
*     
*       @apiParam {ObjectId} [product_id] product_id of the availability
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a availability"
*     }
* 
*     @apiError {String} error Failed post a availability
* 
*   
* 
*//**
* 
* @api {delete} /availability/:availability_id DELETE one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a availability"
*     }
* 
*     @apiError {String} error Failed delete a availability
* 
*   
* 
*//**
* 
* @api {patch} /availability/:availability_id PATCH one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [state] state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a availability"
*     }
* 
*     @apiError {String} error Failed patch a availability
* 
*   
* 
*//**
* 
* @api {put} /availability/:availability_id PUT one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} state state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a availability"
*     }
* 
*     @apiError {String} error Failed put a availability
* 
*   
* 
*//**
* 
* @api {get} /bill/:bill_id GET bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all bill, if you want get one bill you should specify his id, otherwise the whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} state state of the bill
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the bill
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the bill
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "String"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a bill"
*     }
* 
*     @apiError {String} error Failed get a bill
* 
*   
* 
*//**
* 
* @api {head} /bill/:bill_id HEAD of bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all bill, if you want get  the header of one bill you should specify his id, otherwise the header of whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a bill"
*     }
* 
*     @apiError {String} error Failed head a bill
* 
*   
* 
*//**
* 
* @api {post} /bill/ POST one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new bill in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [state] state of the bill
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the bill
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a bill"
*     }
* 
*     @apiError {String} error Failed post a bill
* 
*   
* 
*//**
* 
* @api {delete} /bill/:bill_id DELETE one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a bill"
*     }
* 
*     @apiError {String} error Failed delete a bill
* 
*   
* 
*//**
* 
* @api {patch} /bill/:bill_id PATCH one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a bill"
*     }
* 
*     @apiError {String} error Failed patch a bill
* 
*   
* 
*//**
* 
* @api {put} /bill/:bill_id PUT one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a bill"
*     }
* 
*     @apiError {String} error Failed put a bill
* 
*   
* 
*//**
* 
* @api {get} /cart/:cart_id GET cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all cart, if you want get one cart you should specify his id, otherwise the whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the cart
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the cart
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the cart
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a cart"
*     }
* 
*     @apiError {String} error Failed get a cart
* 
*   
* 
*//**
* 
* @api {head} /cart/:cart_id HEAD of cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all cart, if you want get  the header of one cart you should specify his id, otherwise the header of whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a cart"
*     }
* 
*     @apiError {String} error Failed head a cart
* 
*   
* 
*//**
* 
* @api {post} /cart/ POST one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new cart in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the cart
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the cart
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a cart"
*     }
* 
*     @apiError {String} error Failed post a cart
* 
*   
* 
*//**
* 
* @api {delete} /cart/:cart_id DELETE one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a cart"
*     }
* 
*     @apiError {String} error Failed delete a cart
* 
*   
* 
*//**
* 
* @api {patch} /cart/:cart_id PATCH one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a cart"
*     }
* 
*     @apiError {String} error Failed patch a cart
* 
*   
* 
*//**
* 
* @api {put} /cart/:cart_id PUT one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a cart"
*     }
* 
*     @apiError {String} error Failed put a cart
* 
*   
* 
*//**
* 
* @api {get} /category/:category_id GET category(s)
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all category, if you want get one category you should specify his id, otherwise the whole categorys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} name name of the category
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [category_id]  category_id(s) of the category
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "String"
*           "category_id" : ["ObjectId"]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a category"
*     }
* 
*     @apiError {String} error Failed get a category
* 
*   
* 
*//**
* 
* @api {head} /category/:category_id HEAD of category(s)
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all category, if you want get  the header of one category you should specify his id, otherwise the header of whole categorys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a category"
*     }
* 
*     @apiError {String} error Failed head a category
* 
*   
* 
*//**
* 
* @api {post} /category/ POST one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new category in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [name] name of the category
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a category"
*     }
* 
*     @apiError {String} error Failed post a category
* 
*   
* 
*//**
* 
* @api {delete} /category/:category_id DELETE one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a category"
*     }
* 
*     @apiError {String} error Failed delete a category
* 
*   
* 
*//**
* 
* @api {patch} /category/:category_id PATCH one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the category
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a category"
*     }
* 
*     @apiError {String} error Failed patch a category
* 
*   
* 
*//**
* 
* @api {put} /category/:category_id PUT one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the category
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a category"
*     }
* 
*     @apiError {String} error Failed put a category
* 
*   
* 
*//**
* 
* @api {get} /order/:order_id GET order(s)
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all order, if you want get one order you should specify his id, otherwise the whole orders are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [order_id]  order_id(s) of the order
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} name name of the order
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the order
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} transaction_id transaction_id of the order
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "String"
*           "product_id" : ["ObjectId"]
*           "transaction_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a order"
*     }
* 
*     @apiError {String} error Failed get a order
* 
*   
* 
*//**
* 
* @api {head} /order/:order_id HEAD of order(s)
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all order, if you want get  the header of one order you should specify his id, otherwise the header of whole orders are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [order_id]  order_id(s) of the order
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a order"
*     }
* 
*     @apiError {String} error Failed head a order
* 
*   
* 
*//**
* 
* @api {post} /order/ POST one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new order in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [name] name of the order
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*       
*     
*   
*     
*       @apiParam {ObjectId} [transaction_id] transaction_id of the order
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a order"
*     }
* 
*     @apiError {String} error Failed post a order
* 
*   
* 
*//**
* 
* @api {delete} /order/:order_id DELETE one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a order"
*     }
* 
*     @apiError {String} error Failed delete a order
* 
*   
* 
*//**
* 
* @api {patch} /order/:order_id PATCH one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the order
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*         
*       
*     
*       
*         @apiParam {ObjectId} [transaction_id] transaction_id of the order
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a order"
*     }
* 
*     @apiError {String} error Failed patch a order
* 
*   
* 
*//**
* 
* @api {put} /order/:order_id PUT one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the order
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*         
*       
*     
*       
*         @apiParam {ObjectId} [transaction_id] transaction_id of the order
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a order"
*     }
* 
*     @apiError {String} error Failed put a order
* 
*   
* 
*//**
* 
* @api {get} /product/:product_id GET product(s)
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all product, if you want get one product you should specify his id, otherwise the whole products are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [product_id]  product_id(s) of the product
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the product
*               
* 
*           
*         
* 
*           
*               
*                   @apiSuccess {String} reference reference of the product
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [availability_id]  availability_id(s) of the product
*             
* 
*             
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} category_id  category_id(s) of the product
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]""reference" : "[object Object]"
*           "availability_id" : ["ObjectId"]
*           
*           "category_id" : [""]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a product"
*     }
* 
*     @apiError {String} error Failed get a product
* 
*   
* 
*//**
* 
* @api {head} /product/:product_id HEAD of product(s)
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all product, if you want get  the header of one product you should specify his id, otherwise the header of whole products are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [product_id]  product_id(s) of the product
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a product"
*     }
* 
*     @apiError {String} error Failed head a product
* 
*   
* 
*//**
* 
* @api {post} /product/ POST one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new product in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the product
*       
*     
*   
*     
*       
*           @apiParam {String} reference reference of the product
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} category_id  category_id(s) of the product
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a product"
*     }
* 
*     @apiError {String} error Failed post a product
* 
*   
* 
*//**
* 
* @api {delete} /product/:product_id DELETE one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a product"
*     }
* 
*     @apiError {String} error Failed delete a product
* 
*   
* 
*//**
* 
* @api {patch} /product/:product_id PATCH one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the product
*           
*       
*     
*       
*         
*             @apiParam {String} [reference] reference of the product
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*         
*       
*     
*       
*         
*           @apiParam {[ObjectId]} category_id  category_id(s) of the product
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a product"
*     }
* 
*     @apiError {String} error Failed patch a product
* 
*   
* 
*//**
* 
* @api {put} /product/:product_id PUT one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the product
*           
*       
*     
*       
*         
*             @apiParam {String} reference reference of the product
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*         
*       
*     
*       
*         
*           @apiParam {[ObjectId]} category_id  category_id(s) of the product
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a product"
*     }
* 
*     @apiError {String} error Failed put a product
* 
*   
* 
*//**
* 
* @api {get} /store/:store_id GET store(s)
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all store, if you want get one store you should specify his id, otherwise the whole stores are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [store_id]  store_id(s) of the store
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} storeBrand_id storeBrand_id of the store
*           
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the store
*               
* 
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "storeBrand_id" : "String""name" : "[object Object]"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a store"
*     }
* 
*     @apiError {String} error Failed get a store
* 
*   
* 
*//**
* 
* @api {head} /store/:store_id HEAD of store(s)
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all store, if you want get  the header of one store you should specify his id, otherwise the header of whole stores are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [store_id]  store_id(s) of the store
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a store"
*     }
* 
*     @apiError {String} error Failed head a store
* 
*   
* 
*//**
* 
* @api {post} /store/ POST one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new store in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [storeBrand_id] storeBrand_id of the store
*     
*   
*     
*       
*           @apiParam {String} name name of the store
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a store"
*     }
* 
*     @apiError {String} error Failed post a store
* 
*   
* 
*//**
* 
* @api {delete} /store/:store_id DELETE one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a store in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} store_id  store_id(s) of the store
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a store"
*     }
* 
*     @apiError {String} error Failed delete a store
* 
*   
* 
*//**
* 
* @api {patch} /store/:store_id PATCH one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to store in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} store_id  store_id(s) of the store
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [storeBrand_id] storeBrand_id of the store
*       
*     
*       
*         
*             @apiParam {String} [name] name of the store
*           
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a store"
*     }
* 
*     @apiError {String} error Failed patch a store
* 
*   
* 
*//**
* 
* @api {put} /store/:store_id PUT one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a store in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} store_id  store_id(s) of the store
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [storeBrand_id] storeBrand_id of the store
*       
*     
*       
*         
*             @apiParam {String} name name of the store
*           
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a store"
*     }
* 
*     @apiError {String} error Failed put a store
* 
*   
* 
*//**
* 
* @api {get} /storeBrand/:storeBrand_id GET storeBrand(s)
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all storeBrand, if you want get one storeBrand you should specify his id, otherwise the whole storeBrands are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [storeBrand_id]  storeBrand_id(s) of the storeBrand
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the storeBrand
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} store_id  store_id(s) of the storeBrand
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]"
*           "store_id" : [""]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a storeBrand"
*     }
* 
*     @apiError {String} error Failed get a storeBrand
* 
*   
* 
*//**
* 
* @api {head} /storeBrand/:storeBrand_id HEAD of storeBrand(s)
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all storeBrand, if you want get  the header of one storeBrand you should specify his id, otherwise the header of whole storeBrands are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [storeBrand_id]  storeBrand_id(s) of the storeBrand
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a storeBrand"
*     }
* 
*     @apiError {String} error Failed head a storeBrand
* 
*   
* 
*//**
* 
* @api {post} /storeBrand/ POST one storeBrand
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new storeBrand in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the storeBrand
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} store_id  store_id(s) of the storeBrand
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeBrandSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a storeBrand"
*     }
* 
*     @apiError {String} error Failed post a storeBrand
* 
*   
* 
*//**
* 
* @api {delete} /storeBrand/:storeBrand_id DELETE one storeBrand
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a storeBrand in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} storeBrand_id  storeBrand_id(s) of the storeBrand
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeBrandSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a storeBrand"
*     }
* 
*     @apiError {String} error Failed delete a storeBrand
* 
*   
* 
*//**
* 
* @api {patch} /storeBrand/:storeBrand_id PATCH one storeBrand
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to storeBrand in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} storeBrand_id  storeBrand_id(s) of the storeBrand
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the storeBrand
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} store_id  store_id(s) of the storeBrand
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeBrandSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a storeBrand"
*     }
* 
*     @apiError {String} error Failed patch a storeBrand
* 
*   
* 
*//**
* 
* @api {put} /storeBrand/:storeBrand_id PUT one storeBrand
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a storeBrand in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} storeBrand_id  storeBrand_id(s) of the storeBrand
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the storeBrand
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} store_id  store_id(s) of the storeBrand
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeBrandSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a storeBrand"
*     }
* 
*     @apiError {String} error Failed put a storeBrand
* 
*   
* 
*//**
* 
* @api {get} /availability/:availability_id GET availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all availability, if you want get one availability you should specify his id, otherwise the whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} state state of the availability
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjecId]} [store_id]  store_id(s) of the availability
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} product_id product_id of the availability
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "[object Object]"
*           "store_id" : ["ObjecId"]
*           "product_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a availability"
*     }
* 
*     @apiError {String} error Failed get a availability
* 
*   
* 
*//**
* 
* @api {head} /availability/:availability_id HEAD of availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all availability, if you want get  the header of one availability you should specify his id, otherwise the header of whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a availability"
*     }
* 
*     @apiError {String} error Failed head a availability
* 
*   
* 
*//**
* 
* @api {post} /availability/ POST one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new availability in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} state state of the availability
*       
*     
*   
*     
*       
*         @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*       
*     
*   
*     
*       @apiParam {ObjectId} [product_id] product_id of the availability
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a availability"
*     }
* 
*     @apiError {String} error Failed post a availability
* 
*   
* 
*//**
* 
* @api {delete} /availability/:availability_id DELETE one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a availability"
*     }
* 
*     @apiError {String} error Failed delete a availability
* 
*   
* 
*//**
* 
* @api {patch} /availability/:availability_id PATCH one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [state] state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a availability"
*     }
* 
*     @apiError {String} error Failed patch a availability
* 
*   
* 
*//**
* 
* @api {put} /availability/:availability_id PUT one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} state state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a availability"
*     }
* 
*     @apiError {String} error Failed put a availability
* 
*   
* 
*//**
* 
* @api {get} /bill/:bill_id GET bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all bill, if you want get one bill you should specify his id, otherwise the whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} state state of the bill
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the bill
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the bill
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "String"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a bill"
*     }
* 
*     @apiError {String} error Failed get a bill
* 
*   
* 
*//**
* 
* @api {head} /bill/:bill_id HEAD of bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all bill, if you want get  the header of one bill you should specify his id, otherwise the header of whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a bill"
*     }
* 
*     @apiError {String} error Failed head a bill
* 
*   
* 
*//**
* 
* @api {post} /bill/ POST one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new bill in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [state] state of the bill
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the bill
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a bill"
*     }
* 
*     @apiError {String} error Failed post a bill
* 
*   
* 
*//**
* 
* @api {delete} /bill/:bill_id DELETE one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a bill"
*     }
* 
*     @apiError {String} error Failed delete a bill
* 
*   
* 
*//**
* 
* @api {patch} /bill/:bill_id PATCH one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a bill"
*     }
* 
*     @apiError {String} error Failed patch a bill
* 
*   
* 
*//**
* 
* @api {put} /bill/:bill_id PUT one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a bill"
*     }
* 
*     @apiError {String} error Failed put a bill
* 
*   
* 
*//**
* 
* @api {get} /cart/:cart_id GET cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all cart, if you want get one cart you should specify his id, otherwise the whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the cart
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the cart
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the cart
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a cart"
*     }
* 
*     @apiError {String} error Failed get a cart
* 
*   
* 
*//**
* 
* @api {head} /cart/:cart_id HEAD of cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all cart, if you want get  the header of one cart you should specify his id, otherwise the header of whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a cart"
*     }
* 
*     @apiError {String} error Failed head a cart
* 
*   
* 
*//**
* 
* @api {post} /cart/ POST one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new cart in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the cart
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the cart
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a cart"
*     }
* 
*     @apiError {String} error Failed post a cart
* 
*   
* 
*//**
* 
* @api {delete} /cart/:cart_id DELETE one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a cart"
*     }
* 
*     @apiError {String} error Failed delete a cart
* 
*   
* 
*//**
* 
* @api {patch} /cart/:cart_id PATCH one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a cart"
*     }
* 
*     @apiError {String} error Failed patch a cart
* 
*   
* 
*//**
* 
* @api {put} /cart/:cart_id PUT one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a cart"
*     }
* 
*     @apiError {String} error Failed put a cart
* 
*   
* 
*//**
* 
* @api {get} /category/:category_id GET category(s)
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all category, if you want get one category you should specify his id, otherwise the whole categorys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} name name of the category
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [category_id]  category_id(s) of the category
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "String"
*           "category_id" : ["ObjectId"]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a category"
*     }
* 
*     @apiError {String} error Failed get a category
* 
*   
* 
*//**
* 
* @api {head} /category/:category_id HEAD of category(s)
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all category, if you want get  the header of one category you should specify his id, otherwise the header of whole categorys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a category"
*     }
* 
*     @apiError {String} error Failed head a category
* 
*   
* 
*//**
* 
* @api {post} /category/ POST one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new category in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [name] name of the category
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a category"
*     }
* 
*     @apiError {String} error Failed post a category
* 
*   
* 
*//**
* 
* @api {delete} /category/:category_id DELETE one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a category"
*     }
* 
*     @apiError {String} error Failed delete a category
* 
*   
* 
*//**
* 
* @api {patch} /category/:category_id PATCH one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the category
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a category"
*     }
* 
*     @apiError {String} error Failed patch a category
* 
*   
* 
*//**
* 
* @api {put} /category/:category_id PUT one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the category
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a category"
*     }
* 
*     @apiError {String} error Failed put a category
* 
*   
* 
*//**
* 
* @api {get} /order/:order_id GET order(s)
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all order, if you want get one order you should specify his id, otherwise the whole orders are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [order_id]  order_id(s) of the order
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} name name of the order
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the order
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} transaction_id transaction_id of the order
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "String"
*           "product_id" : ["ObjectId"]
*           "transaction_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a order"
*     }
* 
*     @apiError {String} error Failed get a order
* 
*   
* 
*//**
* 
* @api {head} /order/:order_id HEAD of order(s)
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all order, if you want get  the header of one order you should specify his id, otherwise the header of whole orders are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [order_id]  order_id(s) of the order
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a order"
*     }
* 
*     @apiError {String} error Failed head a order
* 
*   
* 
*//**
* 
* @api {post} /order/ POST one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new order in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [name] name of the order
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*       
*     
*   
*     
*       @apiParam {ObjectId} [transaction_id] transaction_id of the order
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a order"
*     }
* 
*     @apiError {String} error Failed post a order
* 
*   
* 
*//**
* 
* @api {delete} /order/:order_id DELETE one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a order"
*     }
* 
*     @apiError {String} error Failed delete a order
* 
*   
* 
*//**
* 
* @api {patch} /order/:order_id PATCH one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the order
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*         
*       
*     
*       
*         @apiParam {ObjectId} [transaction_id] transaction_id of the order
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a order"
*     }
* 
*     @apiError {String} error Failed patch a order
* 
*   
* 
*//**
* 
* @api {put} /order/:order_id PUT one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the order
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*         
*       
*     
*       
*         @apiParam {ObjectId} [transaction_id] transaction_id of the order
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a order"
*     }
* 
*     @apiError {String} error Failed put a order
* 
*   
* 
*//**
* 
* @api {get} /product/:product_id GET product(s)
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all product, if you want get one product you should specify his id, otherwise the whole products are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [product_id]  product_id(s) of the product
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the product
*               
* 
*           
*         
* 
*           
*               
*                   @apiSuccess {String} reference reference of the product
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [availability_id]  availability_id(s) of the product
*             
* 
*             
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} category_id  category_id(s) of the product
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]""reference" : "[object Object]"
*           "availability_id" : ["ObjectId"]
*           
*           "category_id" : [""]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a product"
*     }
* 
*     @apiError {String} error Failed get a product
* 
*   
* 
*//**
* 
* @api {head} /product/:product_id HEAD of product(s)
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all product, if you want get  the header of one product you should specify his id, otherwise the header of whole products are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [product_id]  product_id(s) of the product
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a product"
*     }
* 
*     @apiError {String} error Failed head a product
* 
*   
* 
*//**
* 
* @api {post} /product/ POST one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new product in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the product
*       
*     
*   
*     
*       
*           @apiParam {String} reference reference of the product
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} category_id  category_id(s) of the product
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a product"
*     }
* 
*     @apiError {String} error Failed post a product
* 
*   
* 
*//**
* 
* @api {delete} /product/:product_id DELETE one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a product"
*     }
* 
*     @apiError {String} error Failed delete a product
* 
*   
* 
*//**
* 
* @api {patch} /product/:product_id PATCH one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the product
*           
*       
*     
*       
*         
*             @apiParam {String} [reference] reference of the product
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*         
*       
*     
*       
*         
*           @apiParam {[ObjectId]} category_id  category_id(s) of the product
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a product"
*     }
* 
*     @apiError {String} error Failed patch a product
* 
*   
* 
*//**
* 
* @api {put} /product/:product_id PUT one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the product
*           
*       
*     
*       
*         
*             @apiParam {String} reference reference of the product
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*         
*       
*     
*       
*         
*           @apiParam {[ObjectId]} category_id  category_id(s) of the product
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a product"
*     }
* 
*     @apiError {String} error Failed put a product
* 
*   
* 
*//**
* 
* @api {get} /store/:store_id GET store(s)
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all store, if you want get one store you should specify his id, otherwise the whole stores are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [store_id]  store_id(s) of the store
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} storeBrand_id storeBrand_id of the store
*           
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the store
*               
* 
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "storeBrand_id" : "String""name" : "[object Object]"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a store"
*     }
* 
*     @apiError {String} error Failed get a store
* 
*   
* 
*//**
* 
* @api {head} /store/:store_id HEAD of store(s)
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all store, if you want get  the header of one store you should specify his id, otherwise the header of whole stores are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [store_id]  store_id(s) of the store
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a store"
*     }
* 
*     @apiError {String} error Failed head a store
* 
*   
* 
*//**
* 
* @api {post} /store/ POST one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new store in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [storeBrand_id] storeBrand_id of the store
*     
*   
*     
*       
*           @apiParam {String} name name of the store
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a store"
*     }
* 
*     @apiError {String} error Failed post a store
* 
*   
* 
*//**
* 
* @api {delete} /store/:store_id DELETE one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a store in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} store_id  store_id(s) of the store
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a store"
*     }
* 
*     @apiError {String} error Failed delete a store
* 
*   
* 
*//**
* 
* @api {patch} /store/:store_id PATCH one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to store in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} store_id  store_id(s) of the store
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [storeBrand_id] storeBrand_id of the store
*       
*     
*       
*         
*             @apiParam {String} [name] name of the store
*           
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a store"
*     }
* 
*     @apiError {String} error Failed patch a store
* 
*   
* 
*//**
* 
* @api {put} /store/:store_id PUT one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a store in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} store_id  store_id(s) of the store
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [storeBrand_id] storeBrand_id of the store
*       
*     
*       
*         
*             @apiParam {String} name name of the store
*           
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a store"
*     }
* 
*     @apiError {String} error Failed put a store
* 
*   
* 
*//**
* 
* @api {get} /storeBrand/:storeBrand_id GET storeBrand(s)
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all storeBrand, if you want get one storeBrand you should specify his id, otherwise the whole storeBrands are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [storeBrand_id]  storeBrand_id(s) of the storeBrand
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the storeBrand
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} store_id  store_id(s) of the storeBrand
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]"
*           "store_id" : [""]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a storeBrand"
*     }
* 
*     @apiError {String} error Failed get a storeBrand
* 
*   
* 
*//**
* 
* @api {head} /storeBrand/:storeBrand_id HEAD of storeBrand(s)
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all storeBrand, if you want get  the header of one storeBrand you should specify his id, otherwise the header of whole storeBrands are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [storeBrand_id]  storeBrand_id(s) of the storeBrand
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a storeBrand"
*     }
* 
*     @apiError {String} error Failed head a storeBrand
* 
*   
* 
*//**
* 
* @api {post} /storeBrand/ POST one storeBrand
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new storeBrand in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the storeBrand
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} store_id  store_id(s) of the storeBrand
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeBrandSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a storeBrand"
*     }
* 
*     @apiError {String} error Failed post a storeBrand
* 
*   
* 
*//**
* 
* @api {delete} /storeBrand/:storeBrand_id DELETE one storeBrand
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a storeBrand in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} storeBrand_id  storeBrand_id(s) of the storeBrand
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeBrandSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a storeBrand"
*     }
* 
*     @apiError {String} error Failed delete a storeBrand
* 
*   
* 
*//**
* 
* @api {patch} /storeBrand/:storeBrand_id PATCH one storeBrand
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to storeBrand in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} storeBrand_id  storeBrand_id(s) of the storeBrand
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the storeBrand
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} store_id  store_id(s) of the storeBrand
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeBrandSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a storeBrand"
*     }
* 
*     @apiError {String} error Failed patch a storeBrand
* 
*   
* 
*//**
* 
* @api {put} /storeBrand/:storeBrand_id PUT one storeBrand
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a storeBrand in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} storeBrand_id  storeBrand_id(s) of the storeBrand
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the storeBrand
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} store_id  store_id(s) of the storeBrand
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeBrandSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a storeBrand"
*     }
* 
*     @apiError {String} error Failed put a storeBrand
* 
*   
* 
*//**
* 
* @api {get} /transaction/:transaction_id GET transaction(s)
* @apigroup transaction
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all transaction, if you want get one transaction you should specify his id, otherwise the whole transactions are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [transaction_id]  transaction_id(s) of the transaction
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} state state of the transaction
*               
* 
*           
*         
* 
*           
*             @apiSuccess {ObjectId} bill_id bill_id of the transaction
*           
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the transaction
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "[object Object]""bill_id" : "ObjectId""order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample transactionNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a transaction"
*     }
* 
*     @apiError {String} error Failed get a transaction
* 
*   
* 
*//**
* 
* @api {head} /transaction/:transaction_id HEAD of transaction(s)
* @apigroup transaction
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all transaction, if you want get  the header of one transaction you should specify his id, otherwise the header of whole transactions are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [transaction_id]  transaction_id(s) of the transaction
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample transactionNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a transaction"
*     }
* 
*     @apiError {String} error Failed head a transaction
* 
*   
* 
*//**
* 
* @api {post} /transaction/ POST one transaction
* @apigroup transaction
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new transaction in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} state state of the transaction
*       
*     
*   
*     
*       @apiParam {ObjectId} [bill_id] bill_id of the transaction
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the transaction
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample transactionSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample transactionNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a transaction"
*     }
* 
*     @apiError {String} error Failed post a transaction
* 
*   
* 
*//**
* 
* @api {delete} /transaction/:transaction_id DELETE one transaction
* @apigroup transaction
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a transaction in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} transaction_id  transaction_id(s) of the transaction
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample transactionSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample transactionNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a transaction"
*     }
* 
*     @apiError {String} error Failed delete a transaction
* 
*   
* 
*//**
* 
* @api {patch} /transaction/:transaction_id PATCH one transaction
* @apigroup transaction
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to transaction in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} transaction_id  transaction_id(s) of the transaction
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [state] state of the transaction
*           
*       
*     
*       
*         @apiParam {ObjectId} [bill_id] bill_id of the transaction
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the transaction
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample transactionSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample transactionNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a transaction"
*     }
* 
*     @apiError {String} error Failed patch a transaction
* 
*   
* 
*//**
* 
* @api {put} /transaction/:transaction_id PUT one transaction
* @apigroup transaction
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a transaction in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} transaction_id  transaction_id(s) of the transaction
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} state state of the transaction
*           
*       
*     
*       
*         @apiParam {ObjectId} [bill_id] bill_id of the transaction
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the transaction
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample transactionSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample transactionNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a transaction"
*     }
* 
*     @apiError {String} error Failed put a transaction
* 
*   
* 
*//**
* 
* @api {get} /availability/:availability_id GET availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all availability, if you want get one availability you should specify his id, otherwise the whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} state state of the availability
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjecId]} [store_id]  store_id(s) of the availability
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} product_id product_id of the availability
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "[object Object]"
*           "store_id" : ["ObjecId"]
*           "product_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a availability"
*     }
* 
*     @apiError {String} error Failed get a availability
* 
*   
* 
*//**
* 
* @api {head} /availability/:availability_id HEAD of availability(s)
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all availability, if you want get  the header of one availability you should specify his id, otherwise the header of whole availabilitys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [availability_id]  availability_id(s) of the availability
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a availability"
*     }
* 
*     @apiError {String} error Failed head a availability
* 
*   
* 
*//**
* 
* @api {post} /availability/ POST one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new availability in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} state state of the availability
*       
*     
*   
*     
*       
*         @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*       
*     
*   
*     
*       @apiParam {ObjectId} [product_id] product_id of the availability
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a availability"
*     }
* 
*     @apiError {String} error Failed post a availability
* 
*   
* 
*//**
* 
* @api {delete} /availability/:availability_id DELETE one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a availability"
*     }
* 
*     @apiError {String} error Failed delete a availability
* 
*   
* 
*//**
* 
* @api {patch} /availability/:availability_id PATCH one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [state] state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a availability"
*     }
* 
*     @apiError {String} error Failed patch a availability
* 
*   
* 
*//**
* 
* @api {put} /availability/:availability_id PUT one availability
* @apigroup availability
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a availability in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} availability_id  availability_id(s) of the availability
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} state state of the availability
*           
*       
*     
*       
*         
*           @apiParam {[ObjecId]} [store_id]  store_id(s) of the availability
*         
*       
*     
*       
*         @apiParam {ObjectId} [product_id] product_id of the availability
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample availabilitySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample availabilityNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a availability"
*     }
* 
*     @apiError {String} error Failed put a availability
* 
*   
* 
*//**
* 
* @api {get} /bill/:bill_id GET bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all bill, if you want get one bill you should specify his id, otherwise the whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} state state of the bill
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the bill
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the bill
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "String"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a bill"
*     }
* 
*     @apiError {String} error Failed get a bill
* 
*   
* 
*//**
* 
* @api {head} /bill/:bill_id HEAD of bill(s)
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all bill, if you want get  the header of one bill you should specify his id, otherwise the header of whole bills are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a bill"
*     }
* 
*     @apiError {String} error Failed head a bill
* 
*   
* 
*//**
* 
* @api {post} /bill/ POST one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new bill in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [state] state of the bill
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the bill
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a bill"
*     }
* 
*     @apiError {String} error Failed post a bill
* 
*   
* 
*//**
* 
* @api {delete} /bill/:bill_id DELETE one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a bill"
*     }
* 
*     @apiError {String} error Failed delete a bill
* 
*   
* 
*//**
* 
* @api {patch} /bill/:bill_id PATCH one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a bill"
*     }
* 
*     @apiError {String} error Failed patch a bill
* 
*   
* 
*//**
* 
* @api {put} /bill/:bill_id PUT one bill
* @apigroup bill
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a bill in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [bill_id]  bill_id(s) of the bill
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [state] state of the bill
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the bill
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the bill
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample billSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample billNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a bill"
*     }
* 
*     @apiError {String} error Failed put a bill
* 
*   
* 
*//**
* 
* @api {get} /cart/:cart_id GET cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all cart, if you want get one cart you should specify his id, otherwise the whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the cart
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the cart
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the cart
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]"
*           "product_id" : ["ObjectId"]
*           "order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a cart"
*     }
* 
*     @apiError {String} error Failed get a cart
* 
*   
* 
*//**
* 
* @api {head} /cart/:cart_id HEAD of cart(s)
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all cart, if you want get  the header of one cart you should specify his id, otherwise the header of whole carts are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [cart_id]  cart_id(s) of the cart
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a cart"
*     }
* 
*     @apiError {String} error Failed head a cart
* 
*   
* 
*//**
* 
* @api {post} /cart/ POST one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new cart in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the cart
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*       
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the cart
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a cart"
*     }
* 
*     @apiError {String} error Failed post a cart
* 
*   
* 
*//**
* 
* @api {delete} /cart/:cart_id DELETE one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a cart"
*     }
* 
*     @apiError {String} error Failed delete a cart
* 
*   
* 
*//**
* 
* @api {patch} /cart/:cart_id PATCH one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a cart"
*     }
* 
*     @apiError {String} error Failed patch a cart
* 
*   
* 
*//**
* 
* @api {put} /cart/:cart_id PUT one cart
* @apigroup cart
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a cart in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} cart_id  cart_id(s) of the cart
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the cart
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the cart
*         
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the cart
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample cartSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample cartNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a cart"
*     }
* 
*     @apiError {String} error Failed put a cart
* 
*   
* 
*//**
* 
* @api {get} /category/:category_id GET category(s)
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all category, if you want get one category you should specify his id, otherwise the whole categorys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} name name of the category
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [category_id]  category_id(s) of the category
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "String"
*           "category_id" : ["ObjectId"]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a category"
*     }
* 
*     @apiError {String} error Failed get a category
* 
*   
* 
*//**
* 
* @api {head} /category/:category_id HEAD of category(s)
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all category, if you want get  the header of one category you should specify his id, otherwise the header of whole categorys are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a category"
*     }
* 
*     @apiError {String} error Failed head a category
* 
*   
* 
*//**
* 
* @api {post} /category/ POST one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new category in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [name] name of the category
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a category"
*     }
* 
*     @apiError {String} error Failed post a category
* 
*   
* 
*//**
* 
* @api {delete} /category/:category_id DELETE one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a category"
*     }
* 
*     @apiError {String} error Failed delete a category
* 
*   
* 
*//**
* 
* @api {patch} /category/:category_id PATCH one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the category
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a category"
*     }
* 
*     @apiError {String} error Failed patch a category
* 
*   
* 
*//**
* 
* @api {put} /category/:category_id PUT one category
* @apigroup category
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a category in database
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [category_id]  category_id(s) of the category
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the category
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [category_id]  category_id(s) of the category
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample categorySuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample categoryNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a category"
*     }
* 
*     @apiError {String} error Failed put a category
* 
*   
* 
*//**
* 
* @api {get} /order/:order_id GET order(s)
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all order, if you want get one order you should specify his id, otherwise the whole orders are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [order_id]  order_id(s) of the order
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} name name of the order
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [product_id]  product_id(s) of the order
*             
* 
*             
*         
* 
*           
*             @apiSuccess {ObjectId} transaction_id transaction_id of the order
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "String"
*           "product_id" : ["ObjectId"]
*           "transaction_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a order"
*     }
* 
*     @apiError {String} error Failed get a order
* 
*   
* 
*//**
* 
* @api {head} /order/:order_id HEAD of order(s)
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all order, if you want get  the header of one order you should specify his id, otherwise the header of whole orders are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [order_id]  order_id(s) of the order
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a order"
*     }
* 
*     @apiError {String} error Failed head a order
* 
*   
* 
*//**
* 
* @api {post} /order/ POST one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new order in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [name] name of the order
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*       
*     
*   
*     
*       @apiParam {ObjectId} [transaction_id] transaction_id of the order
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a order"
*     }
* 
*     @apiError {String} error Failed post a order
* 
*   
* 
*//**
* 
* @api {delete} /order/:order_id DELETE one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a order"
*     }
* 
*     @apiError {String} error Failed delete a order
* 
*   
* 
*//**
* 
* @api {patch} /order/:order_id PATCH one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the order
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*         
*       
*     
*       
*         @apiParam {ObjectId} [transaction_id] transaction_id of the order
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a order"
*     }
* 
*     @apiError {String} error Failed patch a order
* 
*   
* 
*//**
* 
* @api {put} /order/:order_id PUT one order
* @apigroup order
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a order in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} order_id  order_id(s) of the order
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [name] name of the order
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [product_id]  product_id(s) of the order
*         
*       
*     
*       
*         @apiParam {ObjectId} [transaction_id] transaction_id of the order
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample orderSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample orderNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a order"
*     }
* 
*     @apiError {String} error Failed put a order
* 
*   
* 
*//**
* 
* @api {get} /product/:product_id GET product(s)
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all product, if you want get one product you should specify his id, otherwise the whole products are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [product_id]  product_id(s) of the product
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the product
*               
* 
*           
*         
* 
*           
*               
*                   @apiSuccess {String} reference reference of the product
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [availability_id]  availability_id(s) of the product
*             
* 
*             
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} category_id  category_id(s) of the product
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]""reference" : "[object Object]"
*           "availability_id" : ["ObjectId"]
*           
*           "category_id" : [""]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a product"
*     }
* 
*     @apiError {String} error Failed get a product
* 
*   
* 
*//**
* 
* @api {head} /product/:product_id HEAD of product(s)
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all product, if you want get  the header of one product you should specify his id, otherwise the header of whole products are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [product_id]  product_id(s) of the product
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a product"
*     }
* 
*     @apiError {String} error Failed head a product
* 
*   
* 
*//**
* 
* @api {post} /product/ POST one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new product in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the product
*       
*     
*   
*     
*       
*           @apiParam {String} reference reference of the product
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} category_id  category_id(s) of the product
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a product"
*     }
* 
*     @apiError {String} error Failed post a product
* 
*   
* 
*//**
* 
* @api {delete} /product/:product_id DELETE one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a product"
*     }
* 
*     @apiError {String} error Failed delete a product
* 
*   
* 
*//**
* 
* @api {patch} /product/:product_id PATCH one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the product
*           
*       
*     
*       
*         
*             @apiParam {String} [reference] reference of the product
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*         
*       
*     
*       
*         
*           @apiParam {[ObjectId]} category_id  category_id(s) of the product
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a product"
*     }
* 
*     @apiError {String} error Failed patch a product
* 
*   
* 
*//**
* 
* @api {put} /product/:product_id PUT one product
* @apigroup product
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a product in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} product_id  product_id(s) of the product
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the product
*           
*       
*     
*       
*         
*             @apiParam {String} reference reference of the product
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [availability_id]  availability_id(s) of the product
*         
*       
*     
*       
*         
*           @apiParam {[ObjectId]} category_id  category_id(s) of the product
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample productSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample productNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a product"
*     }
* 
*     @apiError {String} error Failed put a product
* 
*   
* 
*//**
* 
* @api {get} /store/:store_id GET store(s)
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all store, if you want get one store you should specify his id, otherwise the whole stores are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [store_id]  store_id(s) of the store
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*             @apiSuccess {String} storeBrand_id storeBrand_id of the store
*           
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the store
*               
* 
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "storeBrand_id" : "String""name" : "[object Object]"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a store"
*     }
* 
*     @apiError {String} error Failed get a store
* 
*   
* 
*//**
* 
* @api {head} /store/:store_id HEAD of store(s)
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all store, if you want get  the header of one store you should specify his id, otherwise the header of whole stores are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [store_id]  store_id(s) of the store
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a store"
*     }
* 
*     @apiError {String} error Failed head a store
* 
*   
* 
*//**
* 
* @api {post} /store/ POST one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new store in database
* 
* 
*   
* 
* 
* 
*   
*     
*       @apiParam {String} [storeBrand_id] storeBrand_id of the store
*     
*   
*     
*       
*           @apiParam {String} name name of the store
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a store"
*     }
* 
*     @apiError {String} error Failed post a store
* 
*   
* 
*//**
* 
* @api {delete} /store/:store_id DELETE one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a store in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} store_id  store_id(s) of the store
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a store"
*     }
* 
*     @apiError {String} error Failed delete a store
* 
*   
* 
*//**
* 
* @api {patch} /store/:store_id PATCH one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to store in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} store_id  store_id(s) of the store
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [storeBrand_id] storeBrand_id of the store
*       
*     
*       
*         
*             @apiParam {String} [name] name of the store
*           
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a store"
*     }
* 
*     @apiError {String} error Failed patch a store
* 
*   
* 
*//**
* 
* @api {put} /store/:store_id PUT one store
* @apigroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a store in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} store_id  store_id(s) of the store
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         @apiParam {String} [storeBrand_id] storeBrand_id of the store
*       
*     
*       
*         
*             @apiParam {String} name name of the store
*           
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a store"
*     }
* 
*     @apiError {String} error Failed put a store
* 
*   
* 
*//**
* 
* @api {get} /storeBrand/:storeBrand_id GET storeBrand(s)
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all storeBrand, if you want get one storeBrand you should specify his id, otherwise the whole storeBrands are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [storeBrand_id]  storeBrand_id(s) of the storeBrand
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the storeBrand
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} store_id  store_id(s) of the storeBrand
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]"
*           "store_id" : [""]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a storeBrand"
*     }
* 
*     @apiError {String} error Failed get a storeBrand
* 
*   
* 
*//**
* 
* @api {head} /storeBrand/:storeBrand_id HEAD of storeBrand(s)
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all storeBrand, if you want get  the header of one storeBrand you should specify his id, otherwise the header of whole storeBrands are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [storeBrand_id]  storeBrand_id(s) of the storeBrand
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a storeBrand"
*     }
* 
*     @apiError {String} error Failed head a storeBrand
* 
*   
* 
*//**
* 
* @api {post} /storeBrand/ POST one storeBrand
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new storeBrand in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the storeBrand
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} store_id  store_id(s) of the storeBrand
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeBrandSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a storeBrand"
*     }
* 
*     @apiError {String} error Failed post a storeBrand
* 
*   
* 
*//**
* 
* @api {delete} /storeBrand/:storeBrand_id DELETE one storeBrand
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a storeBrand in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} storeBrand_id  storeBrand_id(s) of the storeBrand
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeBrandSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a storeBrand"
*     }
* 
*     @apiError {String} error Failed delete a storeBrand
* 
*   
* 
*//**
* 
* @api {patch} /storeBrand/:storeBrand_id PATCH one storeBrand
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to storeBrand in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} storeBrand_id  storeBrand_id(s) of the storeBrand
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the storeBrand
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} store_id  store_id(s) of the storeBrand
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeBrandSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a storeBrand"
*     }
* 
*     @apiError {String} error Failed patch a storeBrand
* 
*   
* 
*//**
* 
* @api {put} /storeBrand/:storeBrand_id PUT one storeBrand
* @apigroup storeBrand
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a storeBrand in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} storeBrand_id  storeBrand_id(s) of the storeBrand
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the storeBrand
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} store_id  store_id(s) of the storeBrand
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample storeBrandSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample storeBrandNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a storeBrand"
*     }
* 
*     @apiError {String} error Failed put a storeBrand
* 
*   
* 
*//**
* 
* @api {get} /transaction/:transaction_id GET transaction(s)
* @apigroup transaction
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all transaction, if you want get one transaction you should specify his id, otherwise the whole transactions are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [transaction_id]  transaction_id(s) of the transaction
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} state state of the transaction
*               
* 
*           
*         
* 
*           
*             @apiSuccess {ObjectId} bill_id bill_id of the transaction
*           
*         
* 
*           
*             @apiSuccess {ObjectId} order_id order_id of the transaction
*           
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "state" : "[object Object]""bill_id" : "ObjectId""order_id" : "ObjectId"
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample transactionNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a transaction"
*     }
* 
*     @apiError {String} error Failed get a transaction
* 
*   
* 
*//**
* 
* @api {head} /transaction/:transaction_id HEAD of transaction(s)
* @apigroup transaction
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all transaction, if you want get  the header of one transaction you should specify his id, otherwise the header of whole transactions are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [transaction_id]  transaction_id(s) of the transaction
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample transactionNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a transaction"
*     }
* 
*     @apiError {String} error Failed head a transaction
* 
*   
* 
*//**
* 
* @api {post} /transaction/ POST one transaction
* @apigroup transaction
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new transaction in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} state state of the transaction
*       
*     
*   
*     
*       @apiParam {ObjectId} [bill_id] bill_id of the transaction
*     
*   
*     
*       @apiParam {ObjectId} [order_id] order_id of the transaction
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample transactionSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample transactionNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a transaction"
*     }
* 
*     @apiError {String} error Failed post a transaction
* 
*   
* 
*//**
* 
* @api {delete} /transaction/:transaction_id DELETE one transaction
* @apigroup transaction
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a transaction in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} transaction_id  transaction_id(s) of the transaction
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample transactionSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample transactionNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a transaction"
*     }
* 
*     @apiError {String} error Failed delete a transaction
* 
*   
* 
*//**
* 
* @api {patch} /transaction/:transaction_id PATCH one transaction
* @apigroup transaction
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to transaction in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} transaction_id  transaction_id(s) of the transaction
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [state] state of the transaction
*           
*       
*     
*       
*         @apiParam {ObjectId} [bill_id] bill_id of the transaction
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the transaction
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample transactionSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample transactionNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a transaction"
*     }
* 
*     @apiError {String} error Failed patch a transaction
* 
*   
* 
*//**
* 
* @api {put} /transaction/:transaction_id PUT one transaction
* @apigroup transaction
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a transaction in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} transaction_id  transaction_id(s) of the transaction
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} state state of the transaction
*           
*       
*     
*       
*         @apiParam {ObjectId} [bill_id] bill_id of the transaction
*       
*     
*       
*         @apiParam {ObjectId} [order_id] order_id of the transaction
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample transactionSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample transactionNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a transaction"
*     }
* 
*     @apiError {String} error Failed put a transaction
* 
*   
* 
*//**
* 
* @api {get} /user/:user_id GET User(s)
* @apigroup user
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all user, if you want get one user you should specify his id, otherwise the whole users are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [user_id]  user_id(s) of the user
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     
*       
*         
* 
*           
*               
*                   @apiSuccess {String} name name of the user
*               
* 
*           
*         
* 
*           
*               
*                   @apiSuccess {String} firstname firstname of the user
*               
* 
*           
*         
* 
*           
*               
*                   @apiSuccess {String} email email of the user
*               
* 
*           
*         
* 
*           
* 
*             
*               @apiSuccess {[ObjectId]} [cart_id]  cart_id(s) of the user
*             
* 
*             
*         
* 
*         @apiSuccessExample {json}Success-Response
*         HTTP/1.1 200 OK:
*         {
*         "name" : "[object Object]""firstname" : "[object Object]""email" : "[object Object]"
*           "cart_id" : ["ObjectId"]
*           
*         }
*     
*   
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample userNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed get a user"
*     }
* 
*     @apiError {String} error Failed get a user
* 
*   
* 
*//**
* 
* @api {head} /user/:user_id HEAD of User(s)
* @apigroup user
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all user, if you want get  the header of one user you should specify his id, otherwise the header of whole users are returned
* 
* 
*   
*     
*       
*         @apiParam {Object_id} [user_id]  user_id(s) of the user
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample userNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed head a user"
*     }
* 
*     @apiError {String} error Failed head a user
* 
*   
* 
*//**
* 
* @api {post} /user/ POST one User
* @apigroup user
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new user in database
* 
* 
*   
* 
* 
* 
*   
*     
*       
*           @apiParam {String} name name of the user
*       
*     
*   
*     
*       
*           @apiParam {String} firstname firstname of the user
*       
*     
*   
*     
*       
*           @apiParam {String} email email of the user
*       
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [cart_id]  cart_id(s) of the user
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample userSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample userNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed post a user"
*     }
* 
*     @apiError {String} error Failed post a user
* 
*   
* 
*//**
* 
* @api {delete} /user/:user_id DELETE one User
* @apigroup user
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a user in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} user_id  user_id(s) of the user
*           
*         
*       
*     
*   
* 
* 
* 
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample userSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample userNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed delete a user"
*     }
* 
*     @apiError {String} error Failed delete a user
* 
*   
* 
*//**
* 
* @api {patch} /user/:user_id PATCH one User
* @apigroup user
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to user in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} user_id  user_id(s) of the user
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} [name] name of the user
*           
*       
*     
*       
*         
*             @apiParam {String} [firstname] firstname of the user
*           
*       
*     
*       
*         
*             @apiParam {String} [email] email of the user
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [cart_id]  cart_id(s) of the user
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample userSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample userNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed patch a user"
*     }
* 
*     @apiError {String} error Failed patch a user
* 
*   
* 
*//**
* 
* @api {put} /user/:user_id PUT one User
* @apigroup user
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a user in database
* 
* 
*   
*     
*       
*         
*           
*             @apiParam {Object_id} user_id  user_id(s) of the user
*           
*         
*       
*     
*   
* 
* 
* 
*   
*     
*       
*         
*             @apiParam {String} name name of the user
*           
*       
*     
*       
*         
*             @apiParam {String} firstname firstname of the user
*           
*       
*     
*       
*         
*             @apiParam {String} email email of the user
*           
*       
*     
*       
*         
*           @apiParam {[ObjectId]} [cart_id]  cart_id(s) of the user
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
*   
* 
*     @apiSuccessExample userSuccess-Response:
*     HTTP/1.1 200 OK
*     {
*       "message" : "request success"
*     }
* 
*     @apiSuccess {String} message request success
* 
*   
* 
* 
* 
*   
* 
*     @apiErrorExample userNotFound:
*     HTTP/1.1 400
*     {
*       "error" : " Failed put a user"
*     }
* 
*     @apiError {String} error Failed put a user
* 
*   
* 
*/