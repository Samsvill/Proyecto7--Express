'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('usuario', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        "idUsuario": 1,
        "nombre": "John",
        "apellido": "Doe",
        "email": "john@example.com",
        "contrasena": "password123"
    },
    {
        "idUsuario": 2,
        "nombre": "Jane",
        "apellido": "Smith",
        "email": "jane@example.com",
        "contrasena": "securepass456"
    }
      ], {});
  },

  async down (queryInterface, Sequelize) {
      /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
      await queryInterface.bulkDelete('usuario', null, {});
    }
  
};