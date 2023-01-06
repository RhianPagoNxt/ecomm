export default createUserUseCase;
export { users };

const users = [];

function createUserUseCase (name, email, password) {
    users.push({
        id: users.length + 1,
        name: name,
        email: email,
        password: password,
        createdDate: new Date().toISOString().substring(0,10)
    })

    return users[users.length - 1];
}

