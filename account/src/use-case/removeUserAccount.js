import { users } from "./createUserAccount.js"; 
import searchUserAccountByEmailUseCase from "./searchUserAccountByEmail.js";
export default removeUserUseCase;

function removeUserUseCase (email) {
    const userFound = users.findIndex((user) => user.email === email);

    if (userFound === -1) {
        return false;
    }
 
    users.splice(userFound, 1);

    const userRemove = searchUserAccountByEmailUseCase(email);
    
    if (userRemove) return false;
    
    return true;
}