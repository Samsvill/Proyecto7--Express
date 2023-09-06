'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoria_gasto_has_gasto', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        "idGasto": 1,
        "idCategoria_gasto": 1
    },
    {
        "idGasto": 2,
        "idCategoria_gasto": 2
    }
      ], {});
   },


  async down (queryInterface, Sequelize) {
      /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
      await queryInterface.bulkDelete('categoria_gasto_has_gasto', null, {});
    }
  
};