

require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 5000,
    
    //ENVIROMENT : process.env.ENVIROMENT,
    DB_NAME : process.env.DB_NAME,
    DB_USERNAME : process.env.DB_USERNAME,
    DB_PASSWORD : process.env.DB_PASSWORD,

   /* Ejemplos 
    çCONSTANTE_1: "valor" ,
    NOMBRE_DEFAULT:"PEDRO",
    EDAD_DEFAULT: 10,
   */
}