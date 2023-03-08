import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcryptjs from 'bcryptjs';
import Accounts from '../models/Account.js';

function verifyAccount(account) {
  if (!account) throw new Error();
}

async function verifyPassword(senha, senhaHash) {
  const validPassword = await bcryptjs.compare(senha, senhaHash);

  if (!validPassword) throw new Error();
}

const initializing = passport.use(
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

export default initializing;
