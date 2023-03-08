const { Router } = require('express');
const PaymentsController = require('../controllers/paymentsController');
const statusValidation = require('../validations/paymentsValidation');

const router = Router();

router
  .get('/api/admin/payments/:id', PaymentsController.listPaymentById)
  .post('/api/payments', PaymentsController.createPayment)
  .patch('/api/admin/payments/:id', statusValidation, PaymentsController.updatePaymentStatus);

module.exports = router;
