import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    id: { type: String },
    status: {
      type: String,
      required: true,
    },
    cliente: {
      cliente_id: {
        type: String,
        required: true,
      },
      nome: { type: String },
      cpf: { type: String },
      endereco: {
        rua: { type: String },
        numero: { type: String },
        complemento: { type: String },
        cep: { type: String },
        cidade: { type: String },
        uf: { type: String },
      },
    },
    enderecoEntrega: {
      rua: {
        type: String,
        required: true,
      },
      numero: {
        type: String,
        required: true,
      },
      complemento: { type: String },
      cep: { type: String },
      cidade: {
        type: String,
        required: true,
      },
      uf: {
        type: String,
        required: true,
      },
    },
    itens: {
      type: Array,
      required: true,
    },
  },
);

const Orders = mongoose.model('orders', orderSchema);

export default Orders;
