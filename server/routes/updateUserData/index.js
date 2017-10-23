/*===================== load all the files we need ========================================*/
import express from 'express';
import updatePassword from './updatePassword';
import updateContact from './updateContact';
import updateProfilePhoto from './updateProfilePhoto';
import updateStatus from './updateStatus';
import isOnline from './isOnline';
import isOffline from './isOffline';
//import passport from 'passport';

let router=express.Router();
/*=====================     providing routers    ========================================*/
router.post('/updatePassword',updatePassword);
router.post('/updateContact',updateContact);
router.post('/updateProfilePhoto',updateProfilePhoto);
router.post('/updateStatus',updateStatus);
router.post('/isOnline',isOnline);
router.post('/isOffline',isOffline);


export default router;
