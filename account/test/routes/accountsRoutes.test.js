import { describe, it, expect } from '@jest/globals';
import request from 'supertest';
import appAccount from '../../src/appAccount.js';

describe('GET /api/admin/accounts', () => {
  it('Must show all the accounts', async () => {
    const response = await request(appAccount)
      .get('/api/admin/accounts')
      .set('Accept', 'application/json')
      .expect('content-type', /json/);

    expect(typeof (response.body)).toBe('object');
  });
});

let idTested;
describe('POST /api/admin/accounts', () => {
  it('Must create a new account', async () => {
    const response = await request(appAccount)
      .post('/api/admin/accounts')
      .send({
        nome: 'Carlos Alberto',
        email: 'carlos.alberto@example.com',
        senha: 'carlinhos123#',
        cpf: '91444237055',
        telefone: '11119331906',
        endereco: {
          rua: 'Rua Afonso Cavalcante de Oliveira',
          numero: '233',
          complemento: 'Bloco 2 Apartamento 34',
          cep: '09812360',
          cidade: 'São Bernardo do Campo',
          uf: 'SP',
        },
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    idTested = response.body._id;
  });
});

describe('GET /api/accounts/:id', () => {
  it('Must show the account from the specified id', async () => {
    const response = await request(appAccount)
      .get(`/api/accounts/${idTested}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(response.body).toEqual(expect.objectContaining({
      _id: idTested,
      nome: expect.any(String),
      email: expect.any(String),
      senha: expect.any(String),
      cpf: expect.any(String),
      telefone: expect.any(String),
      endereco: expect.any(Object),
    }));
  });
});

describe('PUT /api/admin/accounts/:id', () => {
  it('Must update the account from the specified id', async () => {
    await request(appAccount)
      .put(`/api/admin/accounts/${idTested}`)
      .send({
        nome: 'Rony Rustico',
        email: 'rony.rustico@example.com',
        senha: 'rustico123#',
        cpf: '91444237055',
        telefone: '11119331906',
        endereco: {
          rua: 'Rua Afonso Cavalcante de Oliveira',
          numero: '233',
          complemento: 'Bloco 2 Apartamento 34',
          cep: '09812360',
          cidade: 'São Bernardo do Campo',
          uf: 'SP',
        },
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('DELETE /api/admin/accounts/:id', () => {
  it('Must delete the account from the specified id', async () => {
    await request(appAccount)
      .delete(`/api/admin/accounts/${idTested}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});
