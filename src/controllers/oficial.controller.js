//Tendra la funcionalidad del endpoimt de cliente
const models =require('../database/models/index')
const errors = require("../const/errors")

module.exports ={
    listar: async(req,res) => {
     try {
            const oficiales = await models.oficial.findAll()

            res.json({
                success: true,
                data: {
                    oficiales: oficiales
                }
            })

        } catch (err) {
            return next(err)
        }
    },

     crear: async (req, res) => {
        try {
            const officeContact = await models.oficial.create(req.body)

            res.json({
                success: true,
                data: {
                    id: officeContact.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },

   listarInfo: async (req, res, next) => {
        try {
            const officeContact = await models.oficial.findOne({
                where: {
                    id: req.params.idOficial
                }
            })            

            if(!officeContact) return next(errors.OficialInexistente)

            res.json({
                success: true,
                data: {
                    oficial: officeContact
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    
    prueba: async(req,res) => {
        try{
            console.log('Ejecutando prueba de Oficial')
            res.json({
                message: "Hola, desde prueba de Oficial"
            }
            )
        }
        catch (err){
            console.log(err)
        }

    },
}