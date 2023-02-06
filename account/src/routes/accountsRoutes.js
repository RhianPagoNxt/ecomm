import express from "express";
import AccountController from "../controllers/accountsController.js";
import accountValidation from "../validations/accountsValidation.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger/account.json' assert { type: "json" };

const router = express.Router();

router
    .get("/api/admin/accounts", AccountController.listAccounts)
    .get("/api/admin/accounts/:id", AccountController.listAccountById)
    .post("/api/admin/accounts", accountValidation, AccountController.addAccount)
    .put("/api/admin/accounts/:id", accountValidation, AccountController.updateAccountById)
    .delete("/api/admin/accounts/:id", AccountController.deleteAccountById)

    .use('/api-docs', swaggerUi.serve)
    .get('/api-docs', swaggerUi.setup(swaggerDocument));
    
export default router;