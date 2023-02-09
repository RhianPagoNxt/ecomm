import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    cpf: {type: String},
    telefone: {type: String},
    endereco: {
        rua: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        complemento: {type: String},
        cep: {type: String},
        cidade: {
            type: String,
            required: true
        },
        uf: {
            type: String,
            required: true
        }
    }
  }
);

const accounts = mongoose.model("accounts", accountSchema);

export default accounts;