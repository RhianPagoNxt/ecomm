import { users } from './createUserAccount.js';

export default function addUserAddressUseCase(
  email,
  logradouro,
  numero,
  complemento,
  bairro,
  cep,
  cidade,
  uf,
) {
  const userInd = users.findIndex((user) => user.email === email);

  if (userInd === -1) return false;

  const addUserAddress = {
    logradouro,
    numero,
    complemento,
    bairro,
    cep,
    cidade,
    uf,
  };

  users[userInd].address = addUserAddress;

  return true;
}
