//Tendra la funcionalidad del endpoimt de cliente
const models =require('../database/models/index')
const errors = require("../const/errors")

module.exports ={
    listar: async(req,res) => {
     try {
            const productos = await models.producto.findAll()

            res.json({
                success: true,
                data: {
                    productos: productos
                }
            })

        } catch (err) {
            return next(err)
        }
    },

     crear: async (req, res) => {
        try {
            const product = await models.producto.create(req.body)

            res.json({
                success: true,
                data: {
                    id: product.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },

   listarInfo: async (req, res, next) => {
        try {
            const product = await models.producto.findOne({
                where: {
                    id: req.params.idProducto
                },
                include:[{
                                    model: models.cliente_producto,
                                    include:[{
                                        model: models.cliente
                                    }]
                                }]
            })            
            
            if(!product) return next(errors.ProductoInexistente)
            
                res.json({
                success: true,
                data: {
                    producto: product
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    prueba: async(req,res) => {
        try{
            console.log('Ejecutando prueba de Producto')
            res.json({
                message: "Hola, desde prueba de Producto"
            }
            )
        }
        catch (err){
            console.log(err)
        }

    },
}
