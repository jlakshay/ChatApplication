/*===================== load all the files we need ========================================*/
import express from 'express';
/*===================  load up the user model ==============================================*/
import user from '../../model/user';

module.exports = (req,res)=>{
	try{
	user.update({"email":req.body.email},{$set:{"isActive":false}},(err,result)=>{  //if the email matches
		if(result)
		{
			res.send({"response":"User is now offline"})
		}
		else{
				res.send({"response":config.Conf.login.resetPassword.notExist}) ;//email doesn't exists
			}})
}catch(error){
  res.json({status:false, message: "Server Error",data: error })
}
}

