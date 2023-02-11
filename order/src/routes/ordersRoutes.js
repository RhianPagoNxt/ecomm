import express from "express";
import OrderController from "../controllers/ordersController.js"

const router = express.Router();

router
    .post("/api/admin/orders", OrderController.createOrder)
    .patch("/api/admin/orders/:id", OrderController.updateStatusOrder)
    
export default router;