import accounts from "../models/Account.js";

class AccountController {
    static listAccounts = (req, res) => {
        accounts.find((err, allAccounts) => {
            if(err) {
                res.status(500).send({message: "Erro no servidor."});
            } else {
                res.status(200).json(allAccounts);
            }
        })
    }

    static listAccountById = (req, res) => {
        const id = req.params.id;

        accounts.findById(id, (err, accountById) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Falha ao encontrar ID do usuário, informe um ID correto!`});
            } else {
                res.status(200).send(accountById);
            }
        });
    }

    static addAccount = (req, res) => {
        let account = new accounts(req.body);

        account.save((err) => {
            if (!err) {
                res.status(201).set(`/api/accounts/${account.id}`).send(account.toJSON());
            } else {
                res.status(401).send({message: "Acesso negado! Usuário desautorizado"});
            }
        });
    }

    static updateAccountById = (req, res) => {
        const id = req.params.id

        accounts.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(400).send({message: "Ação não concluída. Informe um ID correto!"});
            } else {
                res.status(200).set('Location', `/api/accounts/${id}`).send({message: "Usuário atualizado com sucesso!"})
            }
        });
    }

    static deleteAccountById = (req, res) => {
        const id = req.params.id;

        accounts.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Falha ao encontrar ID do usuário, informe um ID correto!`});
              } else {
                res.status(200).send({message: "Usuário apagado com sucesso!"});
              }
        });
    }
}

export default AccountController;