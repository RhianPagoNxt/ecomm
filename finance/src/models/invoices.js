module.exports = (sequelize, DataTypes) => {
  const Invoices = sequelize.define('Invoices', {
    descricao: {
      allowNull: false,
      type: DataTypes.JSON,
    },
  });
  Invoices.associate = function association(models) {
    Invoices.belongsTo(models.Payments, {
      foreignKey: 'payment_id',
    });
  };
  return Invoices;
};
