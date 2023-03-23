import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import bearer from '../authentication/apiGatewayMiddlewaresAuthentication.js';

const accountRouter = express.Router();
const portAccount = process.env.ACCOUNT || 3002;
const accountProxy = createProxyMiddleware({ target: `http://account:${portAccount}`, changeOrigin: true });

accountRouter
  .get('/api/admin/accounts', bearer, accountProxy)
  .get('/api/accounts/logout/:token', bearer, accountProxy)
  .get('/api/accounts/:id', accountProxy)
  .post('/api/admin/accounts', accountProxy)
  .post('/api/accounts/login', accountProxy)
  .put('/api/admin/accounts/:id', bearer, accountProxy)
  .delete('/api/admin/accounts/:id', bearer, accountProxy);

export default accountRouter;
