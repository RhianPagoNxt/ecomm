async function useApiAccounts (id) {
    const searchAccount = await fetch(`http://localhost:3002/api/admin/accounts/${id}`);
    const accountFound = await searchAccount.json();
    return accountFound;
}

async function useApiFinance (id, descricao) {
    await fetch(`http://localhost:3003/api/admin/payments/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            status: 'CONFIRMADO',
            descricao: descricao,
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    })
}

export {useApiAccounts, useApiFinance};
