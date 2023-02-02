import appProduct from "./product/src/appProduct.js";

const port = process.env.PORT || 3000;
const apiChosen = process.argv

if (apiChosen[2] == "Products") {
    appProduct.listen(port, () => {
        console.log(`Servidor escutando em http://localhost:${port}`)
    })
}