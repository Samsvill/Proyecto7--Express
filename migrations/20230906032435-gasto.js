'use strict';

/** @type {import('sequelize-cli').Migration} */
const gasto = require("../models").gasto;

module.exports = {
  async up (queryInterface, Sequelize) {
    await gasto.sync()
  },

  async down (queryInterface, Sequelize) {
      /* ELIMINACIÓN LA TABLA */
      await queryInterface.dropTable('gasto');
  }
  
};