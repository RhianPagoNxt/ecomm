import changeUserNameUseCase from '../src/use-case/changeUserName.js';
import createUserUseCase from '../src/use-case/createUserAccount.js';

createUserUseCase('Josué Lima', 'josuelima@email.com', 'senhaDoJosue');
createUserUseCase('Rhian Moura', 'rhianmoura@email.com', 'senhaDoRhian');
createUserUseCase('Bia Ferreira', 'biaferreira@email.com', 'senhaDaBia');

console.log(changeUserNameUseCase('josuelima@email.com', 'Josue Silva'));
console.log(changeUserNameUseCase('rhianmoura@email.com', 'Rhian Landim'));
console.log(changeUserNameUseCase('biaferreira@email.com', 'Bia Trivillin'));
console.log(changeUserNameUseCase('desconhecido@email.com', 'Desconhecido'));
