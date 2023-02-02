import express from "express";
import CategoryController from "../controllers/categoriesController.js";

const router = express.Router();

router
    .get("/api/categories", CategoryController.listCategories)
    .get("/api/categories/:id", CategoryController.listCategoryById)
    .post("/api/admin/categories", CategoryController.addCategory)
    .put("/api/admin/categories/:id", CategoryController.updateCategoryById)
    .delete("/api/admin/categories/:id", CategoryController.deleteCategoryById)
    .patch("/api/admin/categories/:id", CategoryController.updateCategoryStatusById)

export default router;