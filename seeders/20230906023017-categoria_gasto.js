'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoria_gasto', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        "idcategoria_gasto": 1,
        "tipo": "Food"
    },
    {
        "idcategoria_gasto": 2,
        "tipo": "Leisure"
    }

      ], {});
   },
  

  async down (queryInterface, Sequelize) {
      /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
      await queryInterface.bulkDelete('categoria_gasto', null, {});
    }
};