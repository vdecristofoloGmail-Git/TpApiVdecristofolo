//Tendra la funcionalidad del endpoimt de cliente
const models =require('../database/models/index')
const errors = require("../const/errors")


module.exports ={
    listar: async(req,res) => {
     try {
            const clientes = await models.cliente.findAll({
                 attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt'] } // 'password' no aparecerá
            })

            res.json({
                success: true,
                data: {
                    clientes: clientes
                }
            })

        } catch (err) {
            return next(err)
        }
    },

     crear: async (req, res,next) => {
        try {
            const client = await models.cliente.create(req.body)
            
            const relacion = await models.cliente_producto.create({
                clienteId:client.id,
                productoId: req.body.productoId
            })

            res.json({
                success: true,
                data: {
                    id: client.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },

   listarInfo: async (req, res, next) => {
        try {
                  

            const client = await models.cliente.findOne({
                where: {
                    id: req.params.idCliente
                },
                
                attributes: {
                     exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt']
                } // 'password' no aparecerá
                ,
                
                include:[{
                    model: models.oficial
                } ,
                {
                    model: models.cliente_producto,
                    include:[{
                        model: models.producto
                    }]
                }]

            })
            
            if(!client) return next(errors.ClienteInexistente)
            
                res.json({
                success: true,
                data: {
                    cliente: client 
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    
    prueba: async(req,res) => {
        try{
            console.log('Ejecutando prueba de cliente')
            res.json({
                message: "Hola, desde prueba de cliente"
            }
            )
        }
        catch (err){
            console.log(err)
        }

    },

    subirArchivo: async (req, res, next) => {
        try {

            //verifico si existe el usuario
            const cliente = await models.cliente.findOne({
                where: {
                    id: req.body.clienteId
                }
            })
            if (!cliente) return next(errors.ClienteInexistente)


            // busco el archivo del usuario
            const ar = await models.archivo_cliente.findOne({
                where: {
                    clienteId: req.body.clienteId,
                    nombre: req.body.nombre
                }
            })
            if (!ar) { // si el archivo no existe, lo creo

                const archivo = await models.archivo_cliente.create({
                    nombre: req.body.nombre, //nombre para identificar el archivo por si un usuario tiene varios archivos
                    file: req.file ? req.file.filename : null, //en el campo file se guarda el nombre del archivo
                    original_name: req.file ? req.file.originalname : null, //en el campo original_name se guarda el nombre original del archivo
                    clienteId: req.body.clienteId
                })

            }


            res.json({
                success: true,
                data: {
                    message: "archivo cargado OK"
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    descargarArchivo: async (req, res, next) => {
        try {

            // verifico si existe el usuario
            const cliente = await models.cliente.findOne({
                where: {
                    id: req.body.clienteId
                }
            })
            if (!cliente) return next(errors.ClienteInexistente)

            // verifico si existe el archivo
            const archivo = await models.archivo_cliente.findOne({
                where: {
                    clienteId: req.body.clienteId,
                    nombre: req.body.nombre
                }
            })
            if (!archivo) return next(errors.ArchivoInexistente)


            res.download('uploads/archivos-clientes/' + archivo.file, archivo.original_name) //descarga el archivo

        } catch (err) {
            return next(err)
        }
    }
}