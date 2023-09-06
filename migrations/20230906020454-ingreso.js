'use strict';

/** @type {import('sequelize-cli').Migration} */

const ingreso = require("../models").ingreso;

module.exports = {
  async up (queryInterface, Sequelize) {
    await ingreso.sync()
  },

  async down (queryInterface, Sequelize) {
      /* ELIMINACIÓN LA TABLA */
      await queryInterface.dropTable('ingreso');
  }
};
