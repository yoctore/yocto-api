/** 
* @api {get} /user/:id Request for get information about one or more User
* @apiname GetUser 
* @apiGroup User
* 
* @apiParam {Number} id User unique ID
* 
* @apiSuccess {String} firstname Firstname of the User 
* @apiSuccess {String} lastname Lastname of the User 
* 
* @apiSuccessExample Success-Response: 
*  HTTP/1.1 200 OK 
*  { 
*       firstname : John, 
*       lastname  : Doe 
*  } 
* 
*/