import express from 'express';
import orders from './ordersRoutes.js';

const routes = (appOrder) => {
  appOrder.route('/').get((req, res) => {
    res.status(200).send('Ecomm - API Orders');
  });

  appOrder.use(
    express.json(),
    orders,
  );
};

export default routes;
