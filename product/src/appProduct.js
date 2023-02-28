import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão com banco feita com sucesso');
});

const appProduct = express();

appProduct.use(express.json());

routes(appProduct);

export default appProduct;
