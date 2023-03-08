import appProduct from './src/appProduct.js';
import db from './src/config/dbConnect.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão com banco feita com sucesso');
});

const portAppProduct = process.env.PORT || 3001;

appProduct.listen(portAppProduct, () => {
  console.log(`Servidor escutando em http://localhost:${portAppProduct}`);
});
