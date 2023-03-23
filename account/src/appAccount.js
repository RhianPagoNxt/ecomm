import express from 'express';
import routes from './routes/index.js';
// eslint-disable-next-line no-unused-vars
import local from './authentication/accountsAuthentication.js';

const appAccount = express();

appAccount.use(express.json());

routes(appAccount);

export default appAccount;
