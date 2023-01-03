export default searchUserAccountByEmailUseCase;
import { users } from "./createUserAccount.js";

function searchUserAccountByEmailUseCase (email) {
   const userSearch = users.find((user) => user.email === email);
   
   if (userSearch) {
    return userSearch;
   } 

   return false;
}


