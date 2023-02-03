import express from "express";
import accounts from "./accountsRoutes.js";

const routes = (appAccount) => {
    appAccount.route("/").get((req, res) => {
        res.status(200).send("Ecomm - API Accounts");
    })

    appAccount.use(
        express.json(),
        accounts
    )
}

export default routes;