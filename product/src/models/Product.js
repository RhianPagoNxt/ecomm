import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { 
      type: String,
      match: /^[^\d.,][^.,]{3,}/,
      required: true
    },
    descricao: {type: String},
    slug: {
      type: String,
      match: /^[a-zA-Z\d-]+$/,
    },
    precoUnitario: {
      type: Number,
      min: 0.01
    },
    qntdEstoque: {
      type: Number,
      min: 1,
      max: 10000
    },
    categoria: {
      type: mongoose.Schema.Types.ObjectId,
      match: /^[\da-z]{24}$/,
      ref: "categories",
      required: true
    }
  }
);

const products = mongoose.model("products", productSchema);

export default products;