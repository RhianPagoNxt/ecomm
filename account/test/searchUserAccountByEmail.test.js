import searchUserAccountByEmailUseCase from '../src/use-case/searchUserAccountByEmail.js';
import createUserUseCase from '../src/use-case/createUserAccount.js';

createUserUseCase('Josué Lima', 'josuelima@email.com', 'senhaDoJosue');
createUserUseCase('Rhian Moura', 'rhianmoura@email.com', 'senhaDoRhian');
createUserUseCase('Bia Ferreira', 'biaferreira@email.com', 'senhaDaBia');

console.log(searchUserAccountByEmailUseCase('josuelima@email.com'));
console.log(searchUserAccountByEmailUseCase('rhianmoura@email.com'));
console.log(searchUserAccountByEmailUseCase('biaferreira@email.com'));
console.log(searchUserAccountByEmailUseCase('desconhecido@email.com'));
