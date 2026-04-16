// Rutas de los clientes


const router = require ("express").Router() //Traemos el router 

const clienteController = require ("../controllers/cliente.controller")//Traemos el controller 

//Creamos todas las rutas de clientes

router.get('/', clienteController.listar) 
router.get('/prueba', clienteController.prueba)  //probamos poniendo prueba
router.post('/', clienteController.crear) 

router.get('/:idCliente', clienteController.listarInfo) 

module.exports = router