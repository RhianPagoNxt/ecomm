import { users } from "./createUserAccount.js"; 
import searchUserAccountByEmailUseCase from "./searchUserAccountByEmail.js";
export default removeUserUseCase;

function removeUserUseCase (email) {
    const userSearch = users.findIndex((user) => user.email === email);

    if (userSearch === -1) return false;
 
    users.splice(userSearch, 1);

    const userRemove = searchUserAccountByEmailUseCase(email);

    if (userRemove) return false;
    
    return true;
}