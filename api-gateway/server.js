import dotenv from 'dotenv';
import appGateway from './src/appGateway.js';

dotenv.config();
const portAppGateway = process.env.PORT || 3005;

appGateway.listen(portAppGateway, () => {
  console.log(`API Gateway escutando a porta ${portAppGateway}`);
});
