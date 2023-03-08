import Joi from 'joi';

const productValidation = (req, res, next) => {
  const productSchema = Joi.object().keys({
    id: Joi.string(),
    nome: Joi.string()
      .pattern(/^[^\d.,][^.,]{3,}/)
      .required(),
    descricao: Joi.string(),
    slug: Joi.string()
      .pattern(/^[a-zA-Z\d-]+$/),
    precoUnitario: Joi.number()
      .min(0),
    qntdEstoque: Joi.number()
      .min(0)
      .max(10000),
    categoria: Joi.string()
      .pattern(/^[\da-z]{24}$/),
  });

  const { error } = productSchema.validate(req.body);
  if (error) {
    res.status(400).send({ message: 'Ação não concluída. Informe os parâmetros corretos!' });
    throw (error);
  }

  next();
};

export default productValidation;
