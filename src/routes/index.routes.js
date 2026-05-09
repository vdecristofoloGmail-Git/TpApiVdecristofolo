//Contiene todas las rutas


const { Router } = require('express')



const clienteRoutes = require('./cliente.routes')
const productoRoutes = require('./producto.routes')
const oficialRoutes = require('./oficial.routes')
const authRoutes = require('./auth.routes')

const decodeJWT = require("../middlewares/decodeJWT")

const rutas_init =() => {

    const router = Router()     //instanciamos un Router

    //router.use("/clientes",decodeJWT,clienteRoutes) //restablecer
    router.use("/clientes",decodeJWT,clienteRoutes)
    router.use("/productos",decodeJWT,productoRoutes)
    router.use("/oficiales",decodeJWT,oficialRoutes)

    return router
}

const rutas_auth = () => {
  const router = Router()

  router.use("/auth", authRoutes)

  return router
}

module.exports = { rutas_init , rutas_auth } 
