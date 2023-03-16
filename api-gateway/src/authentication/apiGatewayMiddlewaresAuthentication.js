import passport from 'passport';

const bearer = async (req, res, next) => {
  passport.authenticate(
    'bearer',
    { session: false },
    (error, payload, info) => {
      if (error) return res.status(400).json({ message: 'Token expirado ou inválido por logout!' });
      req.user = payload.id;
      req.token = info.token;
      return next();
    },
  )(req, res, next);
};

export default bearer;
