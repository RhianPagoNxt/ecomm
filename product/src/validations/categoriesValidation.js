import Joi from "joi";

const categoryValidation = (req, res, next) => {
    const categorySchema = Joi.object().keys({
        id: Joi.string(),
        nome: Joi.string()
            .pattern(new RegExp(/^[^\d.,][^.,]{3,}/))
            .required(),
        status: Joi.string()
    })

    const {error} = categorySchema.validate(req.body);
    if (error) {
        res.status(400).send({message: "Ação não concluída. Informe os parâmetros corretos!"});
        throw(error);
    }

    next();
    return true;
}

export default categoryValidation;