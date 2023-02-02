import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { 
          type: String,
          match: /^[^\d.,][^.,]{3,}/,
          required: true
        },
        status: { 
          type: String,
          enum: ['ATIVA', 'INATIVA']
        }
    }
);

const categories = mongoose.model("categories", categorySchema);

export default categories;