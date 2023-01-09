import { users } from "./createUserAccount.js";
export default searchUserAccountByEmailUseCase;

function searchUserAccountByEmailUseCase (email) {
   const userSearch = users.find((user) => user.email === email);

   if (userSearch) return userSearch;

   return false;
}


