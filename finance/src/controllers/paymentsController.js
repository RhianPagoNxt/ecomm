const db = require('../models');

class PaymentsController {

  static async listPaymentById (req, res) {
    const { id } = req.params
    try {
      const payment = await db.Payments.findOne({ where: { id: Number(id) } })
      return res.status(200)
      .json({
        id: payment.id,
        valor: payment.valor, 
        nome: payment.nome,
        numeroCartao: payment.numeroCartao,
        expiracaoCartao: payment.expiracaoCartao,
        status: payment.status,
        createdAt: payment.createdAt,
        updatedAt: payment.updatedAt
      })
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createPayment (req, res) {
    const payment = {...req.body, status: 'CRIADO'};
    try {
      const newPayment = await db.Payments.create(payment);
      return res.status(201).set('Location', `/payments/${newPayment.id}`)
      .json({
        id: newPayment.id, 
        status: newPayment.status
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PaymentsController;