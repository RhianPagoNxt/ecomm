import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import bearer from '../authentication/apiGatewayMiddlewaresAuthentication.js';

const categoryRouter = express.Router();
const portCategory = process.env.PRODUCT || 3001;
const categoryProxy = createProxyMiddleware({ target: `http://product:${portCategory}`, changeOrigin: true });

categoryRouter
  .get('/api/categories', categoryProxy)
  .get('/api/categories/:id', categoryProxy)
  .post('/api/admin/categories', bearer, categoryProxy)
  .put('/api/admin/categories/:id', bearer, categoryProxy)
  .delete('/api/admin/categories/:id', bearer, categoryProxy)
  .patch('/api/admin/categories/:id', bearer, categoryProxy);

export default categoryRouter;
