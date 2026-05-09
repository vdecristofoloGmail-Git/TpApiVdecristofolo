'use strict';


const models=require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
                models.cliente_producto.findOrCreate({
                    where: {
                        id: "1"
                    },
                    defaults: {
                        clienteId: 1,
                        productoId: 1
                    }
                }),
                 models.cliente_producto.findOrCreate({
                    where: {
                        id: "2"
                    },
                    defaults: {
                        clienteId: 2,
                        productoId: 2
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
