/*===================== load all the files we need ========================================*/
import express from 'express';
/*===================  load up the user model ==============================================*/
import user from '../../model/user';
module.exports = (req,res)=>{
	try{
	user.find({"email":req.params.email},(err,result)=>{  //if the email matches
		//console.log("inside find")
		if(result)
		{

			res.json(result)
		}
		else{
				res.send({"response":config.Conf.login.resetPassword.notExist}) ;//email doesn't exists
			}})
}catch(error){
  res.json({status:false, message: "Server Error",data: error })
}
}