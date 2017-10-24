/*===================== load all the files we need ========================================*/
import express from 'express';
import getUserInfo from './getUserInfo';

//import passport from 'passport';

let router=express.Router();
/*=====================     providing routers    ========================================*/
router.get('/:email',getUserInfo);


export default router;
