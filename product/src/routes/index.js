import express from "express";
import categories from "./categoriesRoutes.js";

const routes = (appProduct) => {
    appProduct.route("/").get((req, res) => {
        res.status(200).send("Ecomm - API Products");
    })

    appProduct.use(
        express.json(),
        categories
    )
}

export default routes;