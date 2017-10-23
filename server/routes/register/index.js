/*===================== load all the files we need ========================================*/
import express from 'express';
import register from './register';

let router=express.Router();
/*=====================     providing routers    ========================================*/
router.post('/',register);
router.get('/')

export default router;