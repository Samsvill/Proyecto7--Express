'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert(presupuesto, [
      {
        idpresupuesto: 1,
        goal: 20.2,
        inicio:'2023-08-01',
        fin:'2023-12-01',
        gastado: 5.10,
        ahorrado: 4,
        idUsuario: 1
      },

      ], {}); 
},

async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete(presupuesto, null, {});
}
};
