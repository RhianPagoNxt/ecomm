import express from "express";
import ProductController from "../controllers/productsController.js";

const router = express.Router();

router
    .get("/api/products", ProductController.listProducts)
    .get("/api/products/:id", ProductController.listProductById)
    .post("/api/admin/products", ProductController.addProduct)
    .put("/api/admin/products/:id", ProductController.updateProductById)
    .delete("/api/admin/products/:id", ProductController.deleteProductById)
    
export default router;