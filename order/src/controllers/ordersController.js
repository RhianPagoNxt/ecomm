import Orders from '../models/Order.js';
import { useApiAccounts, useApiFinance } from '../APIs/usingAPIs.js';

class OrderController {
  static listOrders = (req, res) => {
    Orders.find((err, allOrders) => {
      if (err) {
        return res.status(500).send({ message: 'Erro no servidor.' });
      }
      return res.status(200).json(allOrders);
    });
  };

  static listOrderById = (req, res) => {
    const { id } = req.params;

    Orders.findById(id, (err, orderById) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Falha ao encontrar ID do pedido, informe um ID correto!` });
      } else {
        res.status(200).send(orderById);
      }
    });
  };

  static createOrder = async (req, res) => {
    const order = req.body;
    const accountInfo = await useApiAccounts(order.cliente.cliente_id);
    const orderCreation = {
      ...order,
      cliente: {
        // eslint-disable-next-line no-underscore-dangle
        cliente_id: accountInfo._id,
        nome: accountInfo.nome,
        cpf: accountInfo.cpf,
        endereco: accountInfo.endereco,
      },
    };
    const newOrder = await new Orders(orderCreation);
    await newOrder.save((err, orderCreated) => {
      if (err) {
        res.status(401).send({ message: err.message });
      } else {
        res.status(201).set('Location', `/api/admin/orders/${orderCreated.id}`).json(orderCreated);
      }
    });
  };

  static updateStatusOrder = async (req, res) => {
    const { id } = req.params;
    const { authorization } = req.headers;
    console.log(typeof (authorization));
    const orderSelected = req.body;

    Orders.findById(id, async (err, order) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Falha ao encontrar ID do pedido, informe um ID correto!` });
      } else {
        const orderInvoice = {
          cliente: order.cliente,
          enderecoEntrega: order.enderecoEntrega,
          itens: order.itens,
        };
        await useApiFinance(orderSelected.payment_id, orderInvoice, authorization);
      }
    });

    Orders.findByIdAndUpdate(id, { $set: { status: 'PAGO' } }, (err) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Falha ao encontrar ID do pedido, informe um ID correto!` });
      } else {
        res.status(200).set('Location', `/api/admin/orders/${id}`).send({ message: 'Status do pedido atualizado com sucesso!' });
      }
    });
  };
}

export default OrderController;
