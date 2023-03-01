module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define('Payments', {
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroCartao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isCreditCard: true,
      },
    },
    expiracaoCartao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^(\d{4})-(0[1-9]|10|11|12)$/,
      },
    },
    cvv: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^\d{3}$/,
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['CRIADO', 'CONFIRMADO', 'CANCELADO']],
      },
    },
  });
  Payments.associate = function association(models) {
    Payments.hasOne(models.Invoices, {
      foreignKey: 'payment_id',
    });
  };
  return Payments;
};
