import appProduct from "./product/src/appProduct.js";
import appAccount from "./account/src/appAccount.js"

const portAppProduct = process.env.PORT || 3001;
const portAppAccount = process.env.PORT || 3002;

const apiChosen = process.argv

function pickPort (path) {
    if (path[2] == "Products") {
        appProduct.listen(portAppProduct, () => {
            console.log(`Servidor escutando em http://localhost:${portAppProduct}`)
        })
    } else if (path[2] == "Accounts") {
        appAccount.listen(portAppAccount, () => {
            console.log(`Servidor escutando em http://localhost:${portAppAccount}`)
        })
    } else if (path[2] == undefined) {
        console.log("Quando executar pela raiz, informe um caminho válido ao lado de npm run dev. Exemplos: npm run dev Products | npm run dev Accounts")
    }
}

pickPort(apiChosen);