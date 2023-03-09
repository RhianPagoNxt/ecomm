import Categories from '../models/Category.js';

class CategoryController {
  static listCategories = (req, res) => {
    Categories.find((err, allCategories) => {
      if (err) {
        return res.status(500).send({ message: 'Erro no servidor.' });
      }
      return res.status(200).json(allCategories);
    });
  };

  static listCategoryById = (req, res) => {
    const { id } = req.params;

    Categories.findById(id, (err, categoryById) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Falha ao encontrar ID da categoria, informe um ID correto!` });
      } else {
        res.status(200).send(categoryById);
      }
    });
  };

  static addCategory = (req, res) => {
    const category = new Categories(req.body);

    category.save((err) => {
      if (err) {
        res.status(401).send({ message: 'Acesso negado! Usuário desautorizado' });
      } else {
        res.status(201).set(`/api/admin/categories/${category.id}`).send(category.toJSON());
      }
    });
  };

  static updateCategoryById = (req, res) => {
    const { id } = req.params;

    Categories.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Ação não concluída. Informe um ID correto!` });
      } else {
        res.status(200).set('Location', `/api/admin/categories/${id}`).send({ message: 'Categoria atualizada com sucesso!' });
      }
    });
  };

  static deleteCategoryById = (req, res) => {
    const { id } = req.params;

    Categories.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Falha ao encontrar ID da categoria, informe um ID correto!` });
      } else {
        res.status(200).send({ message: 'Categoria apagada com sucesso!' });
      }
    });
  };

  static updateCategoryStatusById = (req, res) => {
    const { id } = req.params;

    Categories.findByIdAndUpdate(id, { $set: { status: 'ATIVA' } }, (err) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Falha na atualização do status da categoria, informe um ID correto!` });
      } else {
        res.status(200).set('Location', `/api/admin/categories/${id}`).send({ message: 'Categoria atualizada com sucesso!' });
      }
    });
  };
}

export default CategoryController;
