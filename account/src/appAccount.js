import express from 'express';
import routes from './routes/index.js';
import { bearer, local } from './authentication/accountsAuthentication.js';

const appAccount = express();

appAccount.use(express.json());

routes(appAccount);

export default appAccount;
