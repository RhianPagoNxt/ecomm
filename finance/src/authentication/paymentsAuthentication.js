const passport = require('passport');
const jwt = require('jsonwebtoken');
const BearerStrategy = require('passport-http-bearer').Strategy;
const useApiAccounts = require('../APIs/usingAPI');

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

module.exports = bearer;
