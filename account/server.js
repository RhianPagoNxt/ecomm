import appAccount from './src/appAccount.js';

const portAppAccount = process.env.PORT || 3002;

appAccount.listen(portAppAccount, () => {
  console.log(`Servidor escutando em http://localhost:${portAppAccount}`);
});
