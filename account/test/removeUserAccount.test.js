import removeUserUseCase from '../src/use-case/removeUserAccount.js';
import createUserUseCase from '../src/use-case/createUserAccount.js';

createUserUseCase('Josué Lima', 'josuelima@email.com', 'senhaDoJosue');
createUserUseCase('Rhian Moura', 'rhianmoura@email.com', 'senhaDoRhian');
createUserUseCase('Bia Ferreira', 'biaferreira@email.com', 'senhaDaBia');

console.log(removeUserUseCase('josuelima@email.com'));
console.log(removeUserUseCase('rhianmoura@email.com'));
console.log(removeUserUseCase('biaferreira@email.com'));
console.log(removeUserUseCase('desconhecido@email.com'));
