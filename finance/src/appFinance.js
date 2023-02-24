const express = require('express');
const routes = require('./routes/index');

const appFinance = express();

appFinance.use(express.json());

routes(appFinance);

module.exports = appFinance;