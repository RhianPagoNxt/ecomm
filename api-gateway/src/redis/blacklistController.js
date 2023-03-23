import { promisify } from 'util';
import { createHash } from 'crypto';
import client from './blacklist.js';

const existsAsync = promisify(client.exists).bind(client);

const createTokenHash = (token) => createHash('sha256')
  .update(token)
  .digest('hex');

const isTokenBlacklisted = async (token) => {
  const tokenHash = createTokenHash(token);
  const result = await existsAsync(tokenHash);
  return result === 1;
};

export default isTokenBlacklisted;
