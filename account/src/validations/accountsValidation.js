import Joi from 'joi';

const accountValidation = (req, res, next) => {
  const accountSchema = Joi.object().keys({
    id: Joi.string(),
    nome: Joi.string()
      .required(),
    email: Joi.string()
      .pattern(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
      .required(),
    senhaHash: Joi.string()
      .pattern(/^(?=.*[$*&@#])(?=.*\d)(?=.*[aA-zZ])[0-9a-zA-Z$*&@#]{8,}$/)
      .required(),
    cpf: Joi.string()
      .pattern(/^\d{11}$/),
    telefone: Joi.string()
      .pattern(/^\d{10,13}$/),
    endereco: Joi.object().required().keys({
      rua: Joi.string()
        .required(),
      numero: Joi.string()
        .required(),
      complemento: Joi.string(),
      cep: Joi.string()
        .pattern(/^\d{8}$/),
      cidade: Joi.string()
        .required(),
      uf: Joi.string()
        .pattern(/^(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$/),
    }),
  });

  const { error } = accountSchema.validate(req.body);
  if (error) {
    res.status(400).send({ message: 'Ação não concluída. Informe os parâmetros corretos!' });
    throw (error);
  }

  next();
};

export default accountValidation;
