import express from 'express';
import passport from 'passport';
import AccountController from '../controllers/accountsController.js';
import accountValidation from '../validations/accountsValidation.js';
import { local, bearer } from '../authentication/accountsMiddlewaresAuthentication.js';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../../swagger/account.json' assert { type: "json" };

const router = express.Router();

router
  .get('/api/admin/accounts', bearer, AccountController.listAccounts)
  .get('/api/accounts/:id', AccountController.listAccountById)
  .post('/api/admin/accounts', accountValidation, AccountController.addAccount)
  .post('/api/accounts/login', local, AccountController.accountLogin)
  .put('/api/admin/accounts/:id', bearer, accountValidation, AccountController.updateAccountById)
  .delete('/api/admin/accounts/:id', bearer, AccountController.deleteAccountById);

// .use('/api-docs', swaggerUi.serve)
// .get('/api-docs', swaggerUi.setup(swaggerDocument));

export default router;
