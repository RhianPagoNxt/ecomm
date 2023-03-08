import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['ATIVA', 'INATIVA'],
    },
  },
);

const Categories = mongoose.model('categories', categorySchema);

export default Categories;
