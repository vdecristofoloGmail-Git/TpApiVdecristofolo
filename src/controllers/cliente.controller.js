//Tendra la funcionalidad del endpoimt de cliente
const models =require('../database/models/index')


module.exports ={
    listar: async(req,res) => {
     try {
            const clientes = await models.cliente.findAll()

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
}