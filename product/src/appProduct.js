import express from 'express';
import routes from './routes/index.js';

const appProduct = express();

appProduct.use(express.json());

routes(appProduct);

export default appProduct;
