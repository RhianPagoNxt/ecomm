import appProduct from "./product/src/appProduct.js";
import appAccount from "./account/src/appAccount.js"

const port = process.env.PORT || 3000;
const apiChosen = process.argv

if (apiChosen[2] == "Products") {
    appProduct.listen(port, () => {
        console.log(`Servidor escutando em http://localhost:${port}`)
    })
}

if (apiChosen[2] == "Accounts") {
    appAccount.listen(port, () => {
        console.log(`Servidor escutando em http://localhost:${port}`)
    })
}