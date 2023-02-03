import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { 
      type: String,
      required: true
    },
    email: { 
      type: String,
      match: /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      required: true
    },
    senha: {
        type: String,
        match: /^(?=.*[$*&@#])(?=.*\d)(?=.*[aA-zZ])[0-9a-zA-Z$*&@#]{8,}$/,
        required: true
    },
    cpf: {
        type: String,
        match: /^\d{11}$/
    },
    telefone: {
        type: String,
        match: /^\d{10,13}$/
    },
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
        cep: {
            type: String,
            match: /^\d{8}$/
        },
        cidade: {
            type: String,
            required: true
        },
        uf: {
            type: String,
            match: /^(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$/,
            required: true
        }
    }
  }
);

const accounts = mongoose.model("accounts", accountSchema);

export default accounts;