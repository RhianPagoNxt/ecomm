import express from "express";
import AccountController from "../controllers/accountsController.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger/account.json' assert { type: "json" };

const router = express.Router();

router
    .get("/api/admin/accounts", AccountController.listAccounts)
    .get("/api/accounts/:id", AccountController.listAccountById)
    .post("/api/admin/accounts", AccountController.addAccount)
    .put("/api/admin/accounts/:id", AccountController.updateAccountById)
    .delete("/api/admin/accounts/:id", AccountController.deleteAccountById)

    .use('/api-docs', swaggerUi.serve)
    .get('/api-docs', swaggerUi.setup(swaggerDocument));
    
export default router;