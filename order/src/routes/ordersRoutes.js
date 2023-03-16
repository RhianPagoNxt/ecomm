import express from 'express';
import OrderController from '../controllers/ordersController.js';

const router = express.Router();

router
  .get('/api/admin/orders', OrderController.listOrders)
  .get('/api/admin/orders/:id', OrderController.listOrderById)
  .post('/api/admin/orders', OrderController.createOrder)
  .patch('/api/admin/orders/:id', OrderController.updateStatusOrder);

export default router;
