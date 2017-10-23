/*===================== load all the things we need ========================================*/
import express from 'express';
/*===================  load up the user model ==============================================*/
import user from '../../model/user';
/*===================  load up the user model ==============================================*/
import message from '../../config/app.config';
// import logger from '../../log4js';
import bcrypt from 'bcrypt-nodejs';
/*===================  load up the user model ==============================================*/
import *  as config from  '../../config/app.config';
module.exports = (req,res)=>{
	try{
	user.find({"email":req.body.email},(err,result)=>{ //check the email id
		if(result.length!=0)
		{
			// logger.info(config.conf.register.userExist );
			res.send({"response":config.conf.register.exist}); //email already exist
		}
		else{
			// logger.info(config.conf.register.new);

  		   let newuser=new user();
            newuser.fullName=req.body.fullName;
            newuser.password=req.body.password;
            newuser.email=req.body.email;
            newuser.contact=req.body.contact;
            newuser.dob=req.body.dob;
            newuser.gender=req.body.gender;
            newuser.profilePhoto=req.body.profilePhoto; //input all the fields value

            //console.log('hello')
			 //input all the fields value
			newuser.save((err,result)=>{
			//	console.log("check");
				if(err){
					res.send(err);
					// logger.error(err + ' ' + 'problem with registering new user' + ' ' + 'register.js:25');
				}
				else
				{
					// logger.info(config.conf.register.newUser);
					res.send(result);
				console.log(result) //send the response
				}
			})
		}
	})
}catch(error){
  res.json({status:false, message: config.conf.register.serverError,data: error })
			

	}
	
}