import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () =>  {
    console.log("Conexão com banco feita com sucesso");
})

const appOrder = express();

appOrder.use(express.json());

routes(appOrder);

export default appOrder;