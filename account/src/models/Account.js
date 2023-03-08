import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senhaHash: {
      type: String,
      required: true,
    },
    cpf: { type: String },
    telefone: { type: String },
    endereco: {
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
  },
);

const Accounts = mongoose.model('accounts', accountSchema);

export default Accounts;
