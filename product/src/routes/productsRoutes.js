import express from 'express';
import ProductController from '../controllers/productsController.js';
import productValidation from '../validations/productsValidation.js';

const router = express.Router();

router
  .get('/api/products', ProductController.listProducts)
  .get('/api/products/:id', ProductController.listProductById)
  .post('/api/admin/products', productValidation, ProductController.addProduct)
  .put('/api/admin/products/:id', productValidation, ProductController.updateProductById)
  .delete('/api/admin/products/:id', ProductController.deleteProductById);

export default router;
