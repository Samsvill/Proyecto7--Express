'use strict';

/** @type {import('sequelize-cli').Migration} */
const categoria_gasto_has_gasto = require("../models").categoria_gasto_has_gasto;

module.exports = {
  async up (queryInterface, Sequelize) {
    await categoria_gasto_has_gasto.sync()
  },

  async down (queryInterface, Sequelize) {
      /* ELIMINACIÓN LA TABLA */
      await queryInterface.dropTable(categoria_gasto_has_gasto);
  }
  
};