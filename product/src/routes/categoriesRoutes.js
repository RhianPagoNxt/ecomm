import express from "express";
import CategoryController from "../controllers/categoriesController.js";

const router = express.Router();

router
    .get("/api/categories", CategoryController.listCategories)
    .post("/api/admin/categories", CategoryController.addCategories)

export default router;