//Tendra la funcionalidad del endpoimt de Oficial

module.exports ={
    listar: async(req,res) => {
        try{
            console.log('Lista todos los Oficiales')
            res.json({
                message: "Lista a todos los Oficales"
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
            console.log('Lista al Oficial: '+req.params.idOficial)
            res.json({
                message: "Lista al Oficial :"+req.params.idOficial
            }
            )
        }
        catch (err){
            console.log(err)
        }

    },
    
    prueba: async(req,res) => {
        try{
            console.log('Ejecutando prueba de Oficial')
            res.json({
                message: "Hola, desde prueba de Oficial"
            }
            )
        }
        catch (err){
            console.log(err)
        }

    },
}