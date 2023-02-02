import categories from "../models/Category.js";

class CategoryController {
    static listCategories = (req, res) => {
        categories.find((err, allCategories) => {
            res.status(200).json(allCategories);
        })
    }

    static addCategories = (req, res) => {
        let category = new categories(req.body);

        category.save((err) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Falha no cadastro da categoria, informe os parâmetros corretos!`});
            } else if (!err) {
                res.status(201).send(category.toJSON());
            } else {
                res.status(401).send({message: "Acesso negado! Usuário desautorizado"});
            }
        });
    }
};

export default CategoryController;