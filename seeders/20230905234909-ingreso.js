'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(ingreso, [
      {
        idingreso: 1,
        desc: "venta coca",
        monto: 40,
        fecha: "2023-08-05",
        idUsuario: 1
      },

      ], {}); 
  },

  async down (queryInterface, Sequelize) {
	    
      /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
      await queryInterface.bulkDelete(ingreso, null, {});
    }
};
