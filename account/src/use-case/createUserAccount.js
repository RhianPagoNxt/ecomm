const users = [];

export function createUserUseCase (name, email, password) {
    users.push({
        id: users.length + 1,
        name: name,
        email: email,
        password: password,
        createdDate: new Date().toLocaleDateString('pt-BR')
    })

    return users[users.length - 1];
}

