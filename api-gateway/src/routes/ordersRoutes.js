import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import bearer from '../authentication/apiGatewayMiddlewaresAuthentication.js';

const orderRouter = express.Router();
const portOrder = process.env.ORDER || 3004;
const orderProxy = createProxyMiddleware({ target: `http://order:${portOrder}`, changeOrigin: true });

orderRouter
  .get('/api/admin/orders', bearer, orderProxy)
  .get('/api/admin/orders/:id', bearer, orderProxy)
  .post('/api/admin/orders', bearer, orderProxy)
  .patch('/api/admin/orders/:id', bearer, orderProxy);

export default orderRouter;
