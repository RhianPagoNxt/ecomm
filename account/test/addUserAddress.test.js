import addUserAddressUseCase from '../src/use-case/addUserAddress.js';
import createUserUseCase from '../src/use-case/createUserAccount.js';

createUserUseCase('Josué Lima', 'josuelima@email.com', 'senhaDoJosue');
createUserUseCase('Rhian Moura', 'rhianmoura@email.com', 'senhaDoRhian');
createUserUseCase('Bia Ferreira', 'biaferreira@email.com', 'senhaDaBia');

console.log(addUserAddressUseCase('josuelima@email.com', 'Rua 2', '98', 'Casa', 'Flores', '69028-330', 'Manaus', 'AM'));
console.log(addUserAddressUseCase('rhianmoura@email.com', 'Rua Albino Costa', '1367', 'Apto.181 Blc.1', 'Divisa', '97573-290', 'Santana do Livramento', 'RS'));
console.log(addUserAddressUseCase('biaferreira@email.com', 'Rua Farias Brito', '512', 'Casa', 'Fanny', '81030-120', 'São Paulo', 'SP'));
