'use strict';

const models=require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize){
        return Promise.all([
            models.producto.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    descripcion: "Producto Cuenta Corriente"
                }
            }),
            models.producto.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    descripcion: "Producto Caje Ahorro"
                }
            })
        ])
    },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
