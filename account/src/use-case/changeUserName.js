import { users } from "./createUserAccount.js";
export default changeUserNameUseCase;

function changeUserNameUseCase (email, newName) {
    const userInd = users.findIndex((user) => user.email === email);

    if(userInd === -1) return false;

    users[userInd].name = newName;
    
    return true;
}