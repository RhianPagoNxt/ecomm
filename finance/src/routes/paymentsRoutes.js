const { Router } = require('express');
const PaymentsController = require('../controllers/paymentsController');
const statusValidation = require('../validations/paymentsValidation');
const bearer = require('../authentication/paymentsMiddlewaresAuthentication');

const router = Router();

router
  .get('/api/admin/payments/:id', bearer, PaymentsController.listPaymentById)
  .post('/api/payments', bearer, PaymentsController.createPayment)
  .patch('/api/admin/payments/:id', bearer, statusValidation, PaymentsController.updatePaymentStatus);

module.exports = router;
