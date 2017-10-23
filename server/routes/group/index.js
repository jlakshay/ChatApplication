import express from 'express';
import group from './group';

const router = express.Router();
/* =====================     providing routers    ======================= */
router.post('/', group);
export default router;
