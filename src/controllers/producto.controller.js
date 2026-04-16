//Tendra la funcionalidad del endpoimt de Producto

module.exports ={
    listar: async(req,res) => {
        try{
            console.log('Lista a todos los Productos')
            res.json({
                message: "Lista a todos los Productos"
            }
            )
        }
        catch (err){
            console.log(err)
        }
    },

    crear: async(req,res) => {

    },

    listarInfo: async(req,res) => {
    try{
            console.log('Lista al Producto: '+req.params.idProducto)
            res.json({
                message: "Lista al Producto :"+req.params.idProducto
            }
            )
        }
        catch (err){
            console.log(err)
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
