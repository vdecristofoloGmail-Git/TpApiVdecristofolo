// Rutas de los clientes


const router = require ("express").Router() //Traemos el router 

const clienteController = require ("../controllers/cliente.controller")//Traemos el controller 

const validate = require('../middlewares/validate') // importar el middleware de validacion de datos
const clienteScheme = require('../middlewares/schemes/cliente.scheme') // importar el scheme de validacion de datos

// -------------Para subir archivos---------------------------- //
const globalConstants = require('../const/globalConstants') // importar las constantes globales
var multer = require('multer') // MULTER ES UN MODULO PARA SUBIR ARCHIVOS A NUESTRO SERVIDOR 
var upload = multer({ // INSTANCIAMOS MULTER Y LO CONFIGURAMOS
    dest: 'uploads/archivos-clientes/', //RUTA DONDE SE VAN A SUBIR LOS ARCHIVOS
    limits: { fileSize: globalConstants.MAX_FILE_SIZE } // PESO MAXIMO DEL ARCHIVO 20MB
})

// ----------------------------------------------------------- //



//Creamos todas las rutas de clientes

router.get('/', clienteController.listar) 
router.get('/prueba', clienteController.prueba)  //probamos poniendo prueba
router.post('/',validate(clienteScheme.crearCliente) ,clienteController.crear) 

router.get('/:idCliente', clienteController.listarInfo) 

// Subir y bajar archivos
router.post('/subirArchivo', upload.single('jpg'), clienteController.subirArchivo) // RUTA PARA SUBIR UN ARCHIVO
router.post('/descargarArchivo/', clienteController.descargarArchivo) // RUTA PARA OBTENER UN ARCHIVO

// Subir y bajar archivos



module.exports = router