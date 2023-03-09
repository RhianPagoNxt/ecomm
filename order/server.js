import * as dotenv from 'dotenv';
import appOrder from './src/appOrder.js';
import db from './src/config/dbConnect.js';

dotenv.config();

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão com banco feita com sucesso');
});

const portAppOrder = process.env.PORT || 3004;

appOrder.listen(portAppOrder, () => {
  console.log(`Servidor escutando em http://localhost:${portAppOrder}`);
});
