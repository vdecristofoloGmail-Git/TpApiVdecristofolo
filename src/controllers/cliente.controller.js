//Tendra la funcionalidad del endpoimt de cliente

module.exports ={
    listar: async(req,res) => {
     try{
            console.log('Lista todos los clientes')
            res.json({
                message: "Lista a todos los clientes"
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
            console.log('Lista al cliente'+req.params.idCliente)
            res.json({
                message: "Lista al cliente :"+req.params.idCliente
            }
            )
        }
        catch (err){
            console.log(err)
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