import passport from 'passport';
import jwt from 'jsonwebtoken';
import BearerStrategy from 'passport-http-bearer';
import isTokenBlacklisted from '../redis/blacklistController.js';

async function checkTokenSituation(token) {
  const tokenStituation = await isTokenBlacklisted(token);
  if (tokenStituation) throw new jwt.JsonWebTokenError('Token expirado ou inválido por logout!');
}

const bearer = passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        await checkTokenSituation(token);
        const payload = jwt.verify(token, process.env.KEY_JWT);
        done(null, payload, { token });
      } catch (error) {
        done(error);
      }
    },
  ),
);

export default bearer;
