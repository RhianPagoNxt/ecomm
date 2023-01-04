import searchUserAccountByAddressUseCase from "../src/use-case/searchUserAccountByAddress.js";
import createUserUseCase from "../src/use-case/createUserAccount.js";
import addUserAddressUseCase from "../src/use-case/addUserAddress.js";

createUserUseCase("Josué Lima", "josuelima@email.com", "senhaDoJosue");
createUserUseCase("Rhian Moura", "rhianmoura@email.com", "senhaDoRhian");
createUserUseCase("Bia Ferreira", "biaferreira@email.com", "senhaDaBia");
createUserUseCase("Talysson Andrade", "talyssonandrade@email.com", "senhaDoTalysson");

addUserAddressUseCase("josuelima@email.com", "Rua 2", "98", "Casa", "Flores", "69028-330", "Manaus", "AM");
addUserAddressUseCase("rhianmoura@email.com", "Rua Albino Costa", "1367", "Apto.181 Blc.1", "Divisa", "97573-290", "Santana do Livramento", "RS");
addUserAddressUseCase("biaferreira@email.com", "Rua Farias Brito", "512", "Casa", "Fanny", "81030-120", "São Paulo", "SP");
addUserAddressUseCase("talyssonandrade@email.com", "Rua Andrômeda", "666", "Apto.25 Blc.4", "Bela Vista", "79321-823", "Osasco", "SP");

console.log(searchUserAccountByAddressUseCase("SP"));
console.log(searchUserAccountByAddressUseCase("RJ"));