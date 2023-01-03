export default createUserUseCase;
export { users };

const users = [
    {
        id: 1,
        name: "Rhian Moura",
        email: "rhianmoura@email.com",
        password: "senhaDoRhian"
    }
];

function createUserUseCase (name, email, password) {
    users.push({
        id: users.length + 1,
        name: name,
        email: email,
        password: password,
        createdDate: new Date().toLocaleDateString('pt-BR')
    })

    return users[users.length - 1];
}

