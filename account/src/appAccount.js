import express from 'express';
import routes from './routes/index.js';

const appAccount = express();

appAccount.use(express.json());

routes(appAccount);

export default appAccount;
