import appProduct from './src/appProduct.js';

const portAppProduct = process.env.PORT || 3001;

appProduct.listen(portAppProduct, () => {
  console.log(`Servidor escutando em http://localhost:${portAppProduct}`);
});
