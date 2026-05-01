// ARCHIVO PARA ESCRIBIR SCHEMES DE Producto


const Joi = require('joi') // importar Joi para validar los datos de entrada

let crearProducto = Joi.object({
    descripcion: Joi.string().required(),
     
    
})

module.exports = {
    crearProducto
}
