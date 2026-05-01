// Rutas de los Productos


const router = require ("express").Router() //Traemos el router 

const poductoController = require ("../controllers/producto.controller")//Traemos el controller 

const validate = require('../middlewares/validate') // importar el middleware de validacion de datos
const productoScheme = require('../middlewares/schemes/producto.scheme') // importar el scheme de validacion de datos


//Creamos todas las rutas de clientes

router.get('/', poductoController.listar) 
router.get('/prueba', poductoController.prueba)  //probamos poniendo prueba
router.post('/',validate(productoScheme.crearProducto) , poductoController.crear) 

router.get('/:idProducto', poductoController.listarInfo) 

module.exports = router