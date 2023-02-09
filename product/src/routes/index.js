import express from "express";
import products from "./productsRoutes.js";
import categories from "./categoriesRoutes.js";

const routes = (appProduct) => {
    appProduct.route("/").get((req, res) => {
        res.status(200).send("Ecomm - API Products");
    })

    appProduct.use(
        express.json(),
        categories,
        products
    )
}

export default routes;