import express from 'express';
import AccountController from '../controllers/accountsController.js';
import accountValidation from '../validations/accountsValidation.js';

const router = express.Router();

router
  .get('/api/admin/accounts', AccountController.listAccounts)
  .get('/api/accounts/:id', AccountController.listAccountById)
  .post('/api/admin/accounts', accountValidation, AccountController.addAccount)
  .put('/api/admin/accounts/:id', accountValidation, AccountController.updateAccountById)
  .delete('/api/admin/accounts/:id', AccountController.deleteAccountById);

export default router;
