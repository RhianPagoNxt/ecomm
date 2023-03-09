const express = require('express');
const routes = require('./routes/index');
const bearer = require('./authentication/paymentsAuthentication');

const appFinance = express();

appFinance.use(express.json());

routes(appFinance);

module.exports = appFinance;
