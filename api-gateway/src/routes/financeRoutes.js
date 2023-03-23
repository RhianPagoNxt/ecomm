import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import bearer from '../authentication/apiGatewayMiddlewaresAuthentication.js';

const financeRouter = express.Router();
const portFinance = process.env.FINANCE || 3003;
const financeProxy = createProxyMiddleware({ target: `http://finance:${portFinance}`, changeOrigin: true });

financeRouter
  .get('/api/admin/payments/:id', bearer, financeProxy)
  .post('/api/payments', bearer, financeProxy)
  .patch('/api/admin/payments/:id', bearer, financeProxy);

export default financeRouter;
