// ARCHIVO PARA ESCRIBIR SCHEMES DE Oficial


const Joi = require('joi') // importar Joi para validar los datos de entrada

let crearOficial = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    mailEmpleado: Joi.string().email().required(),
    sucursal: Joi.number().required(),
    
})

module.exports = {
    crearOficial
}
