import express from 'express';
import authRoutes from './authRoutes';
import productRoutes from './productRoutes';
const router = express.Router();
authRoutes(router);
productRoutes(router);

export default router;
