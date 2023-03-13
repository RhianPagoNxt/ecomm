import passport from 'passport';
import jwt from 'jsonwebtoken';
import BearerStrategy from 'passport-http-bearer';
import useApiAccounts from '../APIs/usingAPI.js';

const bearer = passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        const payload = jwt.verify(token, process.env.KEY_JWT);
        const account = await useApiAccounts(payload.id);
        done(null, account);
      } catch (error) {
        done(error);
      }
    },
  ),
);

export default bearer;
