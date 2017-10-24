/*===================== load all the files we need ========================================*/
import express from 'express';
import login from './login';
import passport from 'passport';

let router=express.Router();

/*=====================     providing routers    ========================================*/

router.post('/', passport.authenticate('local-login'), (req, res) => {
console.log("this is callback");
res.json({"success":req.user.id});

});

export default router;
