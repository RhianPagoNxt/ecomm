const db = require('../models');

class PaymentsController {
  static async listPaymentById(req, res) {
    const { id } = req.params;
    try {
      const payment = await db.Payments.findOne({ where: { id: Number(id) } });
      return res.status(200)
        .json({
          id: payment.id,
          valor: payment.valor,
          nome: payment.nome,
          numeroCartao: payment.numeroCartao,
          expiracaoCartao: payment.expiracaoCartao,
          status: payment.status,
          createdAt: payment.createdAt,
          updatedAt: payment.updatedAt,
        });
    } catch (error) {
      return res.status(400).json({ message: `${error.message} - Falha ao encontrar ID do pagamento, informe um ID correto!` });
    }
  }

  static async createPayment(req, res) {
    const payment = { ...req.body, status: 'CRIADO' };
    try {
      const newPayment = await db.Payments.create(payment);
      const links = [
        {
          rel: 'self',
          method: 'GET',
          href: `http://localhost:3003/api/admin/payments/${newPayment.id}`,
        },
        {
          rel: 'confirmation',
          method: 'PATCH',
          status: 'CONFIRMADO',
          href: `http://localhost:3003/api/admin/payments/${newPayment.id}`,
        },
        {
          rel: 'cancellation',
          method: 'PATCH',
          status: 'CANCELADO',
          href: `http://localhost:3003/api/admin/payments/${newPayment.id}`,
        },
      ];
      return res.status(201).set('Location', `/api/admin/payments/${newPayment.id}`)
        .json({
          id: newPayment.id,
          status: newPayment.status,
          links,
        });
    } catch (error) {
      return res.status(500).json({ message: `${error.message} - Erro no servidor.` });
    }
  }

  static async updatePaymentStatus(req, res) {
    const { id } = req.params;
    const statusUpdate = req.body;
    const links = [
      {
        rel: 'self',
        method: 'GET',
        href: `http://localhost:3003/api/admin/payments/${id}`,
      },
    ];
    try {
      if (statusUpdate.status === 'CONFIRMADO') {
        db.sequelize.transaction(async (t) => {
          await db.Payments.update(
            { status: statusUpdate.status },
            { where: { id: Number(id) } },
            { transaction: t },
          );
          await db.Invoices.create(
            { descricao: statusUpdate.descricao, payment_id: id },
            { transaction: t },
          );
          const updatedPayment = await db.Payments.findOne({ where: { id: Number(id) } });
          return res.status(200).json({ ...updatedPayment, links });
        });
      } else {
        await db.Payments.update(
          { status: statusUpdate.status },
          { where: { id: Number(id) } },
        );
        const updatedPayment = await db.Payments.findOne({ where: { id: Number(id) } });
        return res.status(200).json(updatedPayment);
      }
      return res.status(200);
    } catch (error) {
      return res.status(400).json({ message: `${error.message} - Falha ao encontrar ID do pagamento, informe um ID correto!` });
    }
  }
}

module.exports = PaymentsController;
