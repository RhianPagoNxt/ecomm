import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import bearer from '../authentication/apiGatewayMiddlewaresAuthentication.js';

const productRouter = express.Router();
const portProduct = process.env.PRODUCT || 3001;
const productProxy = createProxyMiddleware({ target: `http://product:${portProduct}`, changeOrigin: true });

productRouter
  .get('/api/products', productProxy)
  .get('/api/products/:id', productProxy)
  .post('/api/admin/products', bearer, productProxy)
  .put('/api/admin/products/:id', bearer, productProxy)
  .delete('/api/admin/products/:id', bearer, productProxy);

export default productRouter;
