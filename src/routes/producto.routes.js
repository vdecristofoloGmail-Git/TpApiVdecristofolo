// Rutas de los Productos


const router = require ("express").Router() //Traemos el router 

const poductoController = require ("../controllers/producto.controller")//Traemos el controller 

//Creamos todas las rutas de clientes

router.get('/', poductoController.listar) 
router.get('/prueba', poductoController.prueba)  //probamos poniendo prueba
router.post('/', poductoController.crear) 

router.get('/:idProducto', poductoController.listarInfo) 

module.exports = router