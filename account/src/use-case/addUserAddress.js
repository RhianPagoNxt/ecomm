import { users } from "../use-case/createUserAccount.js"
export default addUserAddressUseCase;

function addUserAddressUseCase (email, logradouro, numero, complemento, bairro, cep, cidade, uf) {
    const userInd = users.findIndex((user) => user.email === email);

    if (userInd === -1) return false;

    const addUserAddress = {
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cep: cep,
        cidade: cidade,
        uf: uf
    }

    users[userInd].address = addUserAddress;
    
    return true;
}

