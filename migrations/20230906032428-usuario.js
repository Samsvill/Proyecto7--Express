'use strict';

/** @type {import('sequelize-cli').Migration} */
const usuario = require("../models").usuario;

module.exports = {
  async up (queryInterface, Sequelize) {
    await usuario.sync()
  },

  async down (queryInterface, Sequelize) {
      /* ELIMINACIÓN LA TABLA */
      await queryInterface.dropTable('usuario');
  }
  
};