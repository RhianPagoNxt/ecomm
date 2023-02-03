import express from "express";
import CategoryController from "../controllers/categoriesController.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger/product.json' assert { type: "json" };

const router = express.Router();

router
    .get("/api/categories", CategoryController.listCategories)
    .get("/api/categories/:id", CategoryController.listCategoryById)
    .post("/api/admin/categories", CategoryController.addCategory)
    .put("/api/admin/categories/:id", CategoryController.updateCategoryById)
    .delete("/api/admin/categories/:id", CategoryController.deleteCategoryById)
    .patch("/api/admin/categories/:id", CategoryController.updateCategoryStatusById)

    .use('/api-docs', swaggerUi.serve)
    .get('/api-docs', swaggerUi.setup(swaggerDocument));

export default router;