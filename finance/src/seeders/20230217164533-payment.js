module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Payments', [
      {
        valor: 16750.99,
        nome: 'Roberto Carlos',
        numeroCartao: '5189373514580490',
        expiracaoCartao: '2024-08',
        cvv: '566',
        status: 'CRIADO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        valor: 572.81,
        nome: 'Jayson Tatum',
        numeroCartao: '4929928179748811',
        expiracaoCartao: '2024-12',
        cvv: '574',
        status: 'CRIADO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Payments', null, {});
  },
};
