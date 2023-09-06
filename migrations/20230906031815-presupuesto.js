'use strict';

/** @type {import('sequelize-cli').Migration} */
const presupuesto = require('../models').presupuesto;

module.exports = {
  async up (queryInterface, Sequelize) {
    await presupuesto.sync()
  },

  async down (queryInterface, Sequelize) {
      /* ELIMINACIÓN LA TABLA */
      await queryInterface.dropTable('presupuesto');
  }
};