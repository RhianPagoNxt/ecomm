import express from 'express';
import AccountController from '../controllers/accountsController.js';
import accountValidation from '../validations/accountsValidation.js';
import local from '../authentication/accountsMiddlewaresAuthentication.js';

const router = express.Router();

router
  .get('/api/admin/accounts', AccountController.listAccounts)
  .get('/api/accounts/logout/:token', AccountController.accountLogout)
  .get('/api/accounts/:id', AccountController.listAccountById)
  .post('/api/admin/accounts', accountValidation, AccountController.addAccount)
  .post('/api/accounts/login', local, AccountController.accountLogin)
  .put('/api/admin/accounts/:id', accountValidation, AccountController.updateAccountById)
  .delete('/api/admin/accounts/:id', AccountController.deleteAccountById);

export default router;
