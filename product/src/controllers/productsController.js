import Products from '../models/Product.js';

class ProductController {
  static listProducts = (req, res) => {
    Products.find()
      .populate('categoria', 'nome')
      .exec((err, allProducts) => {
        if (err) {
          return res.status(500).send({ message: 'Erro no servidor.' });
        }
        return res.status(200).json(allProducts);
      });
  };

  static listProductById = (req, res) => {
    const { id } = req.params;

    Products.findById(id)
      .populate('categoria', 'nome')
      .exec((err, productById) => {
        if (err) {
          res.status(400).send({ message: `${err.message} - Falha ao encontrar ID do produto, informe um ID correto!` });
        } else {
          res.status(200).send(productById);
        }
      });
  };

  static addProduct = (req, res) => {
    const product = new Products(req.body);

    product.save((err) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(201).set(`/api/admin/products/${product.id}`).send(product.toJSON());
      }
    });
  };

  static updateProductById = (req, res) => {
    const { id } = req.params;

    Products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Ação não concluída. Informe um ID correto!` });
      } else {
        res.status(200).set('Location', `/api/admin/products/${id}`).send({ message: 'Produto atualizado com sucesso!' });
      }
    });
  };

  static deleteProductById = (req, res) => {
    const { id } = req.params;

    Products.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Falha ao encontrar ID do produto, informe um ID correto!` });
      } else {
        res.status(200).send({ message: 'Produto apagado com sucesso!' });
      }
    });
  };
}

export default ProductController;
