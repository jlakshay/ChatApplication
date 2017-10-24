import bcrypt from 'bcrypt';

module.exports=function(givenPW,savedPW,cb){

	bcrypt.compare(givenPW,savedPW,function(err,isMatch){
		if(err){
			cb(err);
		}
		cb(null,isMatch);
	});
	function isLOggedIn(req,res,next){
  if(req.isAuthenticated())
    return next();
  res.redirect('/');
}
};