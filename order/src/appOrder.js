import express from 'express';
import routes from './routes/index.js';

const appOrder = express();

appOrder.use(express.json());

routes(appOrder);

export default appOrder;
