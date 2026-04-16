//Contiene todas las rutas


const { Router } = require('express')
const clienteRoutes = require('./cliente.routes')
const productoRoutes = require('./producto.routes')
const oficialRoutes = require('./oficial.routes')

const rutas_init =() => {

    const router = Router()     //instanciamos un Router

    router.use("/clientes",clienteRoutes)
    router.use("/productos",productoRoutes)
    router.use("/oficiales",oficialRoutes)

    return router
}

module.exports= { rutas_init } 