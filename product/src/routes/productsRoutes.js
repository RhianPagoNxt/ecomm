import express from 'express';
import ProductController from '../controllers/productsController.js';
import productValidation from '../validations/productsValidation.js';
import bearer from '../authentication/productsMiddlewaresAuthentication.js';

const router = express.Router();

router
  .get('/api/products', ProductController.listProducts)
  .get('/api/products/:id', ProductController.listProductById)
  .post('/api/admin/products', bearer, productValidation, ProductController.addProduct)
  .put('/api/admin/products/:id', bearer, productValidation, ProductController.updateProductById)
  .delete('/api/admin/products/:id', bearer, ProductController.deleteProductById);

export default router;
