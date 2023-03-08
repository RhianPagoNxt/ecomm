import express from 'express';
import CategoryController from '../controllers/categoriesController.js';
import categoryValidation from '../validations/categoriesValidation.js';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../../swagger/product.json' assert { type: "json" };

const router = express.Router();

router
  .get('/api/categories', CategoryController.listCategories)
  .get('/api/categories/:id', CategoryController.listCategoryById)
  .post('/api/admin/categories', categoryValidation, CategoryController.addCategory)
  .put('/api/admin/categories/:id', categoryValidation, CategoryController.updateCategoryById)
  .delete('/api/admin/categories/:id', CategoryController.deleteCategoryById)
  .patch('/api/admin/categories/:id', CategoryController.updateCategoryStatusById);

// .use('/api-docs', swaggerUi.serve)
// .get('/api-docs', swaggerUi.setup(swaggerDocument));

export default router;
