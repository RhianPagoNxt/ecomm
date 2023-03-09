import passport from 'passport';
import jwt from 'jsonwebtoken';
import LocalStrategy from 'passport-local';
import BearerStrategy from 'passport-http-bearer';
import bcryptjs from 'bcryptjs';
import Accounts from '../models/Account.js';
import { checkBlacklist } from '../redis/blacklistController.js';

function verifyAccount(account) {
  if (!account) throw new Error({ message: 'Informe dados válidos para email e senha!' });
}

async function verifyPassword(senha, senhaHash) {
  const validPassword = await bcryptjs.compare(senha, senhaHash);

  if (!validPassword) throw new Error({ message: 'Informe dados válidos para email e senha!' });
}

async function checkTokenSituation(token) {
  const tokenStituation = await checkBlacklist(token);
  if (tokenStituation) throw new jwt.JsonWebTokenError('Token expirado ou inválido por logout!');
}

export const local = passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'senha',
    session: false,
  }, async (email, senha, done) => {
    try {
      const account = await Accounts.findOne({ email });
      verifyAccount(account);
      await verifyPassword(senha, account.senhaHash);
      done(null, account);
    } catch (error) {
      done(error);
    }
  }),
);

export const bearer = passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        await checkTokenSituation(token);
        const payload = jwt.verify(token, process.env.KEY_JWT);
        const account = await Accounts.findById(payload.id);
        done(null, account, { token });
      } catch (error) {
        done(error);
      }
    },
  ),
);
