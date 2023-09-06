'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('ingreso', [
      {
        "idingreso": 1,
        "desc": "Salary",
        "monto": 2000,
        "fecha": "2023-08-25",
        "idUsuario": 1
    },
    {
        "idingreso": 2,
        "desc": "Freelance",
        "monto": 500,
        "fecha": "2023-08-24",
        "idUsuario": 2
    }

      ], {}); 
  },

  async down (queryInterface, Sequelize) {
	    
      /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
      await queryInterface.bulkDelete('ingreso', null, {});
    }
};