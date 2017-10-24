  import express from 'express';
  import User from '../../model/user';
  import comparePassword from '../../utils/comparePassword';
  import *  as config from  '../../config/app.config';

 /*=================================export the class===================================*/
 
  module.exports = (req,res)=>{
   
    try{  User.findOne({"email":req.body.email},(err,result)=>{
     if(err)//finds the email id, if already exist
   {
    res.send({error:config.conf.login.error});
    }
    //if email not found, that is not registered
  else if(result==null){
          res.send({error:config.conf.login.notFound});
          }
  else{
      comparePassword(req.body.password,result.password,(err,isMatch)=>{
  if(isMatch&&!err){
          res.json({ success: true});
          }
  else{
       res.send({ success: false, message: config.conf.login.authentication });
          }
          }) 
        }
      })
    }catch(error){
    res.json({status:false, message: config.conf.login.serverError,data: error })
  }

  };
