import express from 'express';
import accounts from './routes/accountsRoutes.js';
import categories from './routes/categoriesRoutes.js';
import finance from './routes/financeRoutes.js';
import orders from './routes/ordersRoutes.js';
import products from './routes/productsRoutes.js';
import bearer from './authentication/apiGatewayAuthentication.js';

const appGateway = express();

appGateway.use('/', accounts);
appGateway.use('/', categories);
appGateway.use('/', finance);
appGateway.use('/', orders);
appGateway.use('/', products);

export default appGateway;
