import * as dotenv from 'dotenv';
import appAccount from './src/appAccount.js';
import db from './src/config/dbConnect.js';
import client from './src/redis/blacklist.js';

dotenv.config();

db.on('error', console.log.bind(console, 'Erro de conexão!'));
db.once('open', () => {
  console.log('Conexão com banco feita com sucesso!');
});

const portAppAccount = process.env.PORT || 3002;

appAccount.listen(portAppAccount, () => {
  console.log(`Servidor escutando em http://localhost:${portAppAccount}`);
});
