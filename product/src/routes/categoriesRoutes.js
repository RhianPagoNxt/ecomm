import express from 'express';
import CategoryController from '../controllers/categoriesController.js';
import categoryValidation from '../validations/categoriesValidation.js';
import bearer from '../authentication/productsMiddlewaresAuthentication.js';

const router = express.Router();

router
  .get('/api/categories', CategoryController.listCategories)
  .get('/api/categories/:id', CategoryController.listCategoryById)
  .post('/api/admin/categories', bearer, categoryValidation, CategoryController.addCategory)
  .put('/api/admin/categories/:id', bearer, categoryValidation, CategoryController.updateCategoryById)
  .delete('/api/admin/categories/:id', bearer, CategoryController.deleteCategoryById)
  .patch('/api/admin/categories/:id', bearer, CategoryController.updateCategoryStatusById);

export default router;
