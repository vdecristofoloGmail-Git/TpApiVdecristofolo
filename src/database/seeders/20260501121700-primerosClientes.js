'use strict';

const models=require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
            models.cliente.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Maria Paz",
                    apellido:"Molinero",
                    email: "paz@gmail.com",
                    oficialId: 1,
                    productoId: 1
                }
            }),
             models.cliente.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Natalia",
                    apellido:"Miranda",
                    email: "natiMiranda@gmail.com",
                    oficialId: 2,
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
