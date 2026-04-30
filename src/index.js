//Ver si va o no
//const globalConstantes = require('..\const\globalConstants.js')


//App basica con Express
const express = require('express');//importa express
const globalConstants = require('./const/globalConstants');


//El router
const routerConfig= require('./routes/index.routes');

//el que reemplaza a la console.log
const logger=require('morgan');

//CORS
var cors=require('cors');

const configuracionApi = (app)=> {
  app.use(express.json()); //permite que express entienda json , esto habilita a despues usar el body
  app.use(express.urlencoded({ extended : true })); //permite que express entienda  formularios enviuados por post
  app.use(logger('dev')); //solo para desarrollo
  app.use(cors()); // CORS para permisos

}
const configuracionRouter = (app)=> {
  app.use('/api/', routerConfig.rutas_init());
  app.use(express.urlencoded({ extended : true })); //permite que express entienda  formularios enviuados por post
  
}



const init = () => {
    const app = express();   //crea mi instancia de  express
    configuracionApi(app) //configurar mi api
                            //Cosas de la API
                            //Cosas de las rutas

    configuracionRouter(app)  //hacer las configuraciones


    app.listen(globalConstants.PORT); // orden de escuchar en el puerto
    console.log ('Escuchando en el puerto:'+globalConstants.PORT);

}

init();
