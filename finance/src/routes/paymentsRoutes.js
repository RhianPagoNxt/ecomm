const { Router } = require('express');
const PaymentsController = require('../controllers/paymentsController');

const router = Router();

router
    .post("/api/admin/payments", PaymentsController.createPayment)

module.exports = router;