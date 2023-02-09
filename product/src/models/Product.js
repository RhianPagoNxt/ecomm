import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: { 
      type: String,
      required: true
    },
    descricao: {type: String},
    slug: {type: String},
    precoUnitario: {type: Number},
    qntdEstoque: {type: Number},
    categoria: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: true
    }
  }
);

const products = mongoose.model("products", productSchema);

export default products;