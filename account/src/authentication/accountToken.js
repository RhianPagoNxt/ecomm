import jwt from 'jsonwebtoken';

export default function createTokenJWT(account) {
  const payload = {
    // eslint-disable-next-line no-underscore-dangle
    id: account._id,
  };

  const token = jwt.sign(payload, process.env.KEY_JWT, { expiresIn: '1d' });
  return token;
}
