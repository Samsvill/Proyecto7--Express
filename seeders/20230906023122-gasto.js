'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	     
    await queryInterface.bulkInsert('gasto', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        "idGasto": 1,
        "desc": "Groceries",
        "monto": 100,
        "fecha": "2023-08-22",
        "idUsuario": 1
    },
    {
        "idGasto": 2,
        "desc": "Entertainment",
        "monto": 50,
        "fecha": "2023-08-23",
        "idUsuario": 2
    }
      ], {});
   },

  async down (queryInterface, Sequelize) {
      /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
      await queryInterface.bulkDelete('gasto', null, {});

  }
};