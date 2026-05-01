// Rutas de los Oficiales


const router = require ("express").Router() //Traemos el router 

const oficialController = require ("../controllers/oficial.controller")//Traemos el controller 

const validate = require('../middlewares/validate') // importar el middleware de validacion de datos
const oficialScheme = require('../middlewares/schemes/oficial.scheme') // importar el scheme de validacion de datos

//Creamos todas las rutas de clientes

router.get('/', oficialController.listar) 
router.get('/prueba', oficialController.prueba)  //probamos poniendo prueba
router.post('/', validate(oficialScheme.crearOficial),oficialController.crear) 

router.get('/:idOficial', oficialController.listarInfo) 

module.exports = router