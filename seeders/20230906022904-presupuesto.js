'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert('presupuesto', [
      {
        "idpresupuesto": 1,
        "goal": 1500.00,
        "inicio": "2023-08-01",
        "fin": "2023-08-31",
        "gastado": 1200.00,
        "ahorrado": 300.00,
        "idUsuario": 1
    },
    {
        "idpresupuesto": 2,
        "goal": 800.00,
        "inicio": "2023-08-01",
        "fin": "2023-08-31",
        "gastado": 700.00,
        "ahorrado": 100.00,
        "idUsuario": 2
    }
      ], {}); 
},

async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('presupuesto', null, {});
}
};