import appOrder from './src/appOrder.js';

const portAppOrder = process.env.PORT || 3004;

appOrder.listen(portAppOrder, () => {
  console.log(`Servidor escutando em http://localhost:${portAppOrder}`);
});
