import fetch from 'node-fetch';

async function useApiAccounts(id) {
  const searchAccount = await fetch(`http://account:3002/api/accounts/${id}`);
  const accountFound = await searchAccount.json();
  return accountFound;
}

async function useApiFinance(id, descricao) {
  await fetch(`http://finance:3003/api/admin/payments/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      status: 'CONFIRMADO',
      descricao,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
}

export { useApiAccounts, useApiFinance };
