'use strict';

const models=require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
            models.oficial.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre   : "Oficial 1",
                    apellido : "Apellido Of 1 Fernandez ",
                    sucursal : "1",
                    mailEmpleado: "mailOf1@gmail.com"
                }
            }),
             models.oficial.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre   : "Oficial 2",
                    apellido : "Apellido Of 2 Gomez ",
                    sucursal : "2",
                    mailEmpleado: "mailOf2@gmail.com"
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
