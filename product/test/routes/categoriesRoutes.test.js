// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, it, expect } from '@jest/globals';
import request from 'supertest';
import appProduct from '../../src/appProduct.js';

describe('GET /api/categories', () => {
  it('Must show all the categories', async () => {
    const response = await request(appProduct)
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/);

    expect(typeof (response.body)).toBe('object');
  });
});

let idTested;
describe('POST /api/admin/categories', () => {
  it('Must add a new category', async () => {
    const response = await request(appProduct)
      .post('/api/admin/categories')
      .send({
        nome: 'COSMÉTICOS',
        status: 'ATIVA',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    idTested = response.body._id;
  });
});

describe('GET /api/categories/:id', () => {
  it('Must show the category from the specified id', async () => {
    const response = await request(appProduct)
      .get(`/api/categories/${idTested}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(response.body).toEqual(expect.objectContaining({
      _id: idTested,
      nome: expect.any(String),
      status: expect.any(String),
    }));
  });
});

describe('PUT /api/admin/categories/:id', () => {
  it('Must update the category from the specified id', async () => {
    await request(appProduct)
      .put(`/api/admin/categories/${idTested}`)
      .send({
        nome: 'BRINQUEDOS',
        status: 'INATIVA',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PATCH /api/admin/categories/:id', () => {
  it('Must update category status from the specified id', async () => {
    await request(appProduct)
      .patch(`/api/admin/categories/${idTested}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('DELETE /api/admin/categories/:id', () => {
  it('Must delete the category from the specified id', async () => {
    await request(appProduct)
      .delete(`/api/admin/categories/${idTested}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});
