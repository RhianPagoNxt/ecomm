const db = require('../models');

async function statusValidation(req, res, next) {
  const { id } = req.params;
  try {
    const statusValidate = await db.Payments.findOne({
      where: {
        id: Number(id),
      },
    });
    if (statusValidate.status === 'CONFIRMADO') {
      return res.status(400).json({ message: 'Este pagamento já foi confirmado e sua nota fiscal já foi gerada!' });
    }
    if (statusValidate.status === 'CANCELADO') {
      return res.status(400).json({ message: 'Esta mudança de status não pode ser realizada!' });
    }
    next();
    return res.status(200);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = statusValidation;
