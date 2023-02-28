const users = [];

export default function createUserUseCase(name, email, password) {
  users.push({
    id: users.length + 1,
    name,
    email,
    password,
    createdDate: new Date().toISOString().substring(0, 10),
  });

  return users[users.length - 1];
}

export { users };
