/*===================== load all the files we need ========================================*/
import express from 'express';
/*===================  load up the user model ==============================================*/
import user from '../../model/user';
import bcrypt from 'bcrypt-nodejs';
import comparePassword from '../../utils/comparePassword';
module.exports = (req,res)=>{
	try{
	user.find({"email":req.body.email},(err,result)=>{  //if the email matches
		//console.log("inside find")
		if(result)
		{   


			comparePassword(req.body.oldPassword,result.password,(err,isMatch)=>{
        if(isMatch&&!err){
          /*let token=jwt.sign({result},"hithis is secret",{
        expiresIn: 10080 // in seconds
      });*/
           res.json({ success: true});
        }
        else{
           res.send({ success: false, message: "config.conf.login.authentication" });
        }
        }) 








			if(req.body.password == result.newPassword){
				/*let afterHashPassword = bcrypt.genSalt(10, function (err, salt) {
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
						user.update({"email":req.body.email},{$set:{"password":afterHashPassword}},(err,result)=>{ //check the email and pass
							if(err){
								res.send(err) //send error
							}
							else{
								res.send(result); //send the result
							}
						})
					})
			})*/
		}else{res.json({message:"Old password is incorrect"})}
		}
		else{
				res.send({"response":config.Conf.login.resetPassword.notExist}) ;//email doesn't exists
			}})
}catch(error){
  res.json({status:false, message: "Server Error",data: error })
}
}