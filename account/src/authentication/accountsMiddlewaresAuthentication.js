import passport from 'passport';

const local = (req, res, next) => {
  passport.authenticate(
    'local',
    { session: false },
    (error, account) => {
      if (error) return res.status(400).json({ message: 'Informe dados válidos para email e senha!' });
      if (!account) return res.status(400).json({ message: 'Por favor preencha os campos com email e senha!' });
      req.user = account;
      return next();
    },
  )(req, res, next);
};

export default local;
