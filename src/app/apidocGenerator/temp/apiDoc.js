/**
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