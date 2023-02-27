const { describe, it, expect } = require('@jest/globals');
const request = require('supertest');
const appFinance = require('../../src/appFinance.js');

let idTested;
describe('POST /api/payments', () => {
    it('Must create a new payment', async () => {
        const response = await request(appFinance)
        .post('/api/payments')
        .send({
            valor: 18000.99,
            nome: 'Rhian Landim',
            numeroCartao: '5272955077440720',
            expiracaoCartao: '2024-08',
            cvv: '743',
            status: 'CRIADO',
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(201);
  
      idTested = response.body.id;
    })
  })

describe('GET /api/admin/payments/:id', () => {
    it('Must show the payment from the specified id', async () => {
      await request(appFinance)
        .get(`/api/admin/payments/${idTested}`)
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200)
  
    })
});

describe('PATCH /api/admin/payments/:id', () => {
    it('Must update payment status from the specified id', async () => {
        await request(appFinance)
            .patch(`/api/admin/payments/${idTested}`)
            .send({
                status: 'CANCELADO'
            })
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200)
    })
})