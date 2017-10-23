import express from 'express';
import user from '../../model/user';
import bcrypt from 'bcrypt-nodejs';

module.exports = (req,res) => {
try{
let afterHashPassword = bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return res.status(404).json({
        	success : false,
        	message : "bcrypt genSalt error " + err 
        });
      }
      bcrypt.hash(req.body.password, salt,null, function(err, hash) {
        if (err) {
          return res.status(404).json({
	        	success : false,
	        	message : "bcrypt hash error " + err 
	        });
        }
        afterHashPassword = hash;
       
        	user.update({
		"email" : req.body.email
	},
	{$set: {"password":afterHashPassword}},
		(err,userdata)=>{
			if(err){
				res.status(404).json({
					success : false,
					message : "Bad Request " + err
				});
			} else{
				console.log(userdata);
				res.status(201).send(userdata);
			}
		});
      	//return afterHashPassword;
      });
    });
}catch(error){
  res.json({status:false, message: "Server Error",data: error })
}
}