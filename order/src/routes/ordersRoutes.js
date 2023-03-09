import express from 'express';
import OrderController from '../controllers/ordersController.js';
import bearer from '../authentication/ordersMiddlewaresAuthentication.js';

const router = express.Router();

router
  .get('/api/admin/orders', bearer, OrderController.listOrders)
  .get('/api/admin/orders/:id', bearer, OrderController.listOrderById)
  .post('/api/admin/orders', bearer, OrderController.createOrder)
  .patch('/api/admin/orders/:id', bearer, OrderController.updateStatusOrder);

export default router;
