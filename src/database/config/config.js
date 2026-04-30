

//configuracion de la BBDD


const globalConstants = require('../../const/globalConstants')
//require('dotenv').config();  //tuve que agregar porque me daba error  DB-create revisar VALE

/**
 * process.env.DB_NAME
 * 
 * 
 *  globalConstants.DB_USERNAME,
 *   "password": globalConstants.DB_PASSWORD,
 *   "database": globalConstants.DB_NAME,
 * 
 */
module.exports =  

{"development2": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "development": {
    "username": globalConstants.DB_USERNAME,
    "password": globalConstants.DB_PASSWORD,
    "database": globalConstants.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
