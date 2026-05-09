const jwt = require('jsonwebtoken') // para crear el token
const globalConstants = require('../const/globalConstants')

module.exports = function (cliente) { // recibe el cliente por parametro

    if (cliente) {

        // Se crea el token con los datos del usuario
        const token = jwt.sign({
            id: cliente.id
        },
            globalConstants.JWT_SECRET, // clave secreta para encriptar el token
            {
                expiresIn: '3000m' // expira en 3 horas 3000m
            }
        )
        
        return token // devuelvo el token
    } else {
        return null // si no hay cliente, devuelvo null
    }


}