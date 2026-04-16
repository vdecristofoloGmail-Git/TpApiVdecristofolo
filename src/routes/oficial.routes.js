// Rutas de los Oficiales


const router = require ("express").Router() //Traemos el router 

const oficialController = require ("../controllers/oficial.controller")//Traemos el controller 

//Creamos todas las rutas de clientes

router.get('/', oficialController.listar) 
router.get('/prueba', oficialController.prueba)  //probamos poniendo prueba
router.post('/', oficialController.crear) 

router.get('/:idOficial', oficialController.listarInfo) 

module.exports = router