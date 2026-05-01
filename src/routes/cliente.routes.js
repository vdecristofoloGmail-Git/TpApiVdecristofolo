// Rutas de los clientes


const router = require ("express").Router() //Traemos el router 

const clienteController = require ("../controllers/cliente.controller")//Traemos el controller 

const validate = require('../middlewares/validate') // importar el middleware de validacion de datos
const clienteScheme = require('../middlewares/schemes/cliente.scheme') // importar el scheme de validacion de datos

//Creamos todas las rutas de clientes

router.get('/', clienteController.listar) 
router.get('/prueba', clienteController.prueba)  //probamos poniendo prueba
router.post('/',validate(clienteScheme.crearCliente) ,clienteController.crear) 

router.get('/:idCliente', clienteController.listarInfo) 

module.exports = router