import redis from 'redis';

const client = redis.createClient({
  host: 'redis',
  port: 6379,
  prefix: 'blacklist:',
});

client.on('connect', () => {
  console.log('Conexão ao redis realizada com sucesso!');
});

client.on('error', () => {
  console.log('Erro de conexão!');
});

export default client;
