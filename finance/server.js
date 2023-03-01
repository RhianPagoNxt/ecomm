const appFinance = require('./src/appFinance');

const portAppFinance = process.env.PORT || 3003;

appFinance.listen(portAppFinance, () => {
  console.log(`Servidor escutando em http://localhost:${portAppFinance}`);
});
