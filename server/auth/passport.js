/*===================== load all the things we need ========================================*/
import comparePassword from '../utils/comparePassword.js';
var LocalStrategy    = require('passport-local').Strategy;

/*===================  load up the user model ==============================================*/

var User = require('../model/user');

/*=====================  load the auth variables ===========================================*/

module.exports = function(passport) {

/*==================== used to serialize the user for the session ==========================*/

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

/*====================== used to deserialize the user ======================================*/

    passport.deserializeUser(function(id, done) {
        User.findbyId(id, function(err, user) {
            done(err, user);
        });
    });

/*===============================   Local Auth ================================================*/

    passport.use('local-login',new LocalStrategy({
       usernameField:'email',
       passwordField:'password',
       passReqToCallback:true
        },
    function(req,email,password, done) {
 
    // asynchronous
       User.findOne({ 'email' : email},function(err, user) {
                    if (err)
                    {
                        console.log('error', email);
                        return done(err,false);
                    }
                    
                    else if (!user) 
                    {
                        console.log('1st',password);
                        return done(null,false);
                        
                    }
                    else 
                    {
                        comparePassword(password, user.password,(err,isMatch)=> {
                            if(isMatch&&!err)
                            {
                               console.log('3rd', password);
                                return done(null,user);
                            }
                            else
                            {
                               console.log('2nd', password);
                                return done(null,false);
                            }
                        })
                        
                    }      
                   
                });
       
}));
};
