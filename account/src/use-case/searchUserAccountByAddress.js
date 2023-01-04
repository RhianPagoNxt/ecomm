import { users } from "./createUserAccount.js";
export default searchUserAccountByAddressUseCase;

function searchUserAccountByAddressUseCase (uf) {
    const userSearch = users.filter((user) => user.address.uf === uf);

    if (userSearch.length > 0) return userSearch;

    return false;
}