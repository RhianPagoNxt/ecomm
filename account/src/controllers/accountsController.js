import bcrypt from 'bcryptjs';
import Accounts from '../models/Account.js';
import createTokenJWT from '../authentication/accountToken.js';
import addTokenToBlacklist from '../redis/blacklistController.js';

class AccountController {
  static listAccounts = (req, res) => {
    Accounts.find((err, allAccounts) => {
      if (err) {
        return res.status(500).send({ message: 'Erro no servidor.' });
      }
      return res.status(200).json(allAccounts);
    });
  };

  static listAccountById = (req, res) => {
    const { id } = req.params;

    Accounts.findById(id, (err, accountById) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Falha ao encontrar ID do usuário, informe um ID correto!` });
      } else {
        res.status(200).send(accountById);
      }
    });
  };

  static addAccount = async (req, res) => {
    const senhaHasheada = await bcrypt.hash(req.body.senhaHash, 16);
    const account = new Accounts({ ...req.body, senhaHash: senhaHasheada });

    account.save((err) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(201).set(`/api/accounts/${account.id}`).send(account.toJSON());
      }
    });
  };

  static updateAccountById = (req, res) => {
    const { id } = req.params;

    Accounts.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(400).send({ message: 'Ação não concluída. Informe um ID correto!' });
      } else {
        res.status(200).set('Location', `/api/accounts/${id}`).send({ message: 'Usuário atualizado com sucesso!' });
      }
    });
  };

  static deleteAccountById = (req, res) => {
    const { id } = req.params;

    Accounts.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Falha ao encontrar ID do usuário, informe um ID correto!` });
      } else {
        res.status(200).send({ message: 'Usuário apagado com sucesso!' });
      }
    });
  };

  static accountLogin = (req, res) => {
    const token = createTokenJWT(req.user);
    res.set('Authorization', token);
    res.status(204).send();
  };

  static accountLogout = async (req, res) => {
    try {
      const { token } = req.params;
      await addTokenToBlacklist(token);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Erro no servidor!` });
    }
  };
}

export default AccountController;
