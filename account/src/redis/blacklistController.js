import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { createHash } from 'crypto';
import client from './blacklist.js';

const existsAsync = promisify(client.exists).bind(client);
const setAsync = promisify(client.set).bind(client);

const createTokenHash = (token) => createHash('sha256')
  .update(token)
  .digest('hex');

export const addTokenToBlacklist = async (token) => {
  const expDate = jwt.decode(token).exp;
  const tokenHash = createTokenHash(token);
  await setAsync(tokenHash, '');
  client.expireat(tokenHash, expDate);
};

export const checkBlacklist = async (token) => {
  const tokenHash = createTokenHash(token);
  const result = await existsAsync(tokenHash);
  return result === 1;
};
