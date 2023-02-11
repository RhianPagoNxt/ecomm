import orders from "../models/Order.js";
import {useApiAccounts, useApiFinance} from "../APIs/usingAPIs.js";

class OrderController {
    static createOrder = async (req, res) => {
        const order = req.body;
        const accountInfo = await useApiAccounts(order.cliente.cliente_id);
        const orderCreation = {...order, cliente: {
            cliente_id: accountInfo._id,
            nome: accountInfo.nome,
            cpf: accountInfo.cpf,
            endereco: accountInfo.endereco
        }}
        const newOrder = await new orders(orderCreation)
        await newOrder.save((err, orderCreated) => {
            if(!err) {
                res.status(201).set('Location', `/api/admin/orders/${orderCreated.id}`).json(orderCreated);
            } else {
                  res.status(500).send({message: err.message});
              }
        })
    }

    static updateStatusOrder = async (req, res) => {
        const { id } = req.params
        const orderSelected = req.body
  
        orders.findById(id, async(err, order) => {
            if(!err) {
                const orderInvoice = {
                    cliente: order.cliente,
                    enderecoEntrega: order.enderecoEntrega,
                    itens: order.itens 
                }
                await useApiFinance(orderSelected.payment_id, orderInvoice)
            } else {
                res.status(400).send({message: `${err.message} - Falha ao encontrar ID do pedido, informe um ID correto!`});
            }
        })

        orders.findByIdAndUpdate(id, {$set: {status: 'PAGO'}}, (err) => {
            if(!err) {
                res.status(200).set('Location', `/api/admin/orders/${id}`).send({message: 'Status do pedido atualizado com sucesso!'});
            } else {
                res.status(400).send({message: `${err.message} - Falha ao encontrar ID do pedido, informe um ID correto!`});
            }
        })
    }
}

export default OrderController;