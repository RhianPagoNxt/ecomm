import express from 'express';
import routes from './routes/index.js';
import bearer from './authentication/ordersAuthentication.js';

const appOrder = express();

appOrder.use(express.json());

routes(appOrder);

export default appOrder;
