import {
  describe, it, beforeAll, afterAll,
} from '@jest/globals';
import mongoose from 'mongoose';
import request from 'supertest';
import appOrder from '../../src/appOrder.js';

beforeAll(async () => {
  await mongoose.connect('mongodb://admin:secret@mongodb:27017/ecomm-order-test?authSource=admin');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET /api/admin/orders', () => {
  it('Must show all the orders', async () => {
    await request(appOrder)
      .get('/api/admin/orders')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let idTested;
describe('POST /api/admin/orders', () => {
  it('Must create a new order', async () => {
    const response = await request(appOrder)
      .post('/api/admin/orders')
      .send({
        cliente: {
          cliente_id: '63ee457d9491f47c65106cca',
        },
        enderecoEntrega: {
          rua: 'Rua Berna',
          numero: '318',
          complemento: 'Casa do Portão Verde',
          cep: '09230040',
          cidade: 'Santo André',
          uf: 'SP',
        },
        itens: [
          {
            produto_id: '63ee43fe14ea96d79c6056a6',
            nomeProduto: 'Clean Architecture',
            quantidade: 2,
            valorDesconto: 10.29,
            precoUnitario: 102.90,
          },
          {
            produto_id: '63ee43fe14ea96d79c6056ab',
            nomeProduto: 'Jogo de pneus',
            quantidade: 1,
            valorDesconto: 63.55,
            precoUnitario: 1276.79,
          },
        ],
        status: 'CRIADO',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    idTested = response.body._id;
  });
});

describe('GET /api/admin/orders/:id', () => {
  it('Must show the order from the specified id', async () => {
    await request(appOrder)
      .get(`/api/admin/orders/${idTested}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PATCH /api/admin/orders/:id', () => {
  it('Must update order status from the specified id', async () => {
    await request(appOrder)
      .patch(`/api/admin/orders/${idTested}`)
      .send({
        payment_id: 1,
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});
