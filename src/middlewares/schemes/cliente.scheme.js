// ARCHIVO PARA ESCRIBIR SCHEMES DE CLIENTE


const Joi = require('joi') // importar Joi para validar los datos de entrada

let crearCliente = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().optional(),
    oficialId: Joi.number().required(),
    productoId:Joi.number().optional()
})

module.exports = {
    crearCliente
}

