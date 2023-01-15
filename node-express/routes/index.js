import express from 'express';
import authRoutes from './authRoutes';
import orderRoutes from './orderRoutes';
import productRoutes from './productRoutes';
const router = express.Router();
authRoutes(router);
productRoutes(router);
orderRoutes(router);

export default router;
