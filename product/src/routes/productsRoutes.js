import express from 'express';
import ProductController from '../controllers/productsController.js';
import productValidation from '../validations/productsValidation.js';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../../swagger/product.json' assert { type: "json" };

const router = express.Router();

router
  .get('/api/products', ProductController.listProducts)
  .get('/api/products/:id', ProductController.listProductById)
  .post('/api/admin/products', productValidation, ProductController.addProduct)
  .put('/api/admin/products/:id', productValidation, ProductController.updateProductById)
  .delete('/api/admin/products/:id', ProductController.deleteProductById);

// .use('/api-docs', swaggerUi.serve)
// .get('/api-docs', swaggerUi.setup(swaggerDocument));

export default router;
