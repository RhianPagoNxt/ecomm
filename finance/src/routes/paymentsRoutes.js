const { Router } = require('express');
const PaymentsController = require('../controllers/paymentsController');

const router = Router();

router
    .get("/api/admin/payments/:id", PaymentsController.listPaymentById)
    .post("/api/admin/payments", PaymentsController.createPayment)

module.exports = router;