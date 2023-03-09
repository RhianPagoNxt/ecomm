async function useApiAccounts(id) {
  const searchAccount = await fetch(`http://account:3002/api/accounts/${id}`);
  const accountFound = await searchAccount.json();
  return accountFound;
}

module.exports = useApiAccounts;
