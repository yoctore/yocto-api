var _=require("lodash"),defaultMessage={code:"",message:"",data:{}},code200=_.merge(defaultMessage,{code:"200"}),newMessage=function(a,b){var c=_.clone(a);return _.merge(c,{message:b})},welcome=newMessage(code200,"Welcome to the api"),userCreated=newMessage(code200,"User was created with success"),userUpdated=newMessage(code200,"User was updated with success"),userDeleted=newMessage(code200,"User was deleted with success"),success=newMessage(code200,"Operation success");module.exports={welcome:welcome,userCreatedSucces:userCreated,userUpdated:userUpdated,userDeleted:userDeleted,success:success};