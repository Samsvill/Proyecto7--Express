'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	     
    await queryInterface.bulkInsert(gasto, [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        idGasto: 1,
        desc: "compra Inecesaria",
        monto: "15",
        fecha: "2023-08-07",
        idUsuario: 1
      },

      ], {});
   },

  async down (queryInterface, Sequelize) {
      /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
      await queryInterface.bulkDelete(gasto, null, {});

  }
};
