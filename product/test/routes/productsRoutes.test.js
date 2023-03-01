import { describe, it, expect } from '@jest/globals';
import request from 'supertest';
import appProduct from '../../src/appProduct.js';

describe('GET /api/products', () => {
  it('Must show all the products', async () => {
    const response = await request(appProduct)
      .get('/api/products')
      .set('Accept', 'application/json')
      .expect('content-type', /json/);

    expect(typeof (response.body)).toBe('object');
  });
});

let idTested;
describe('POST /api/admin/products', () => {
  it('Must add a new product', async () => {
    const response = await request(appProduct)
      .post('/api/admin/products')
      .send({
        nome: 'Raquete Elétrica',
        descricao: 'Raquete para matar mosquitos',
        slug: 'raquete-eletrica',
        precoUnitario: 190.58,
        qntdEstoque: 7,
        categoria: '63ee4424e791565652d35eb9',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    idTested = response.body._id;
  });
});

describe('GET /api/products/:id', () => {
  it('Must show the product from the specified id', async () => {
    const response = await request(appProduct)
      .get(`/api/products/${idTested}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(response.body).toEqual(expect.objectContaining({
      _id: idTested,
      nome: expect.any(String),
      descricao: expect.any(String),
      slug: expect.any(String),
      precoUnitario: expect.any(Number),
      qntdEstoque: expect.any(Number),
      categoria: expect.any(Object),
    }));
  });
});

describe('PUT /api/admin/products/:id', () => {
  it('Must update the product from the specified id', async () => {
    await request(appProduct)
      .put(`/api/admin/products/${idTested}`)
      .send({
        nome: 'Raquete Elétrica',
        descricao: 'Raquete para matar insetos',
        slug: 'raquete-eletrica',
        precoUnitario: 290.58,
        qntdEstoque: 9,
        categoria: '63ee4424e791565652d35eb9',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('DELETE /api/admin/products/:id', () => {
  it('Must delete the product from the specified id', async () => {
    await request(appProduct)
      .delete(`/api/admin/products/${idTested}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});
