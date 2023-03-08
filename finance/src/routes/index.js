const bodyParser = require('body-parser');
const payments = require('./paymentsRoutes');

module.exports = (appFinance) => {
  appFinance.use(
    bodyParser.json(),
    payments,
  );
};
