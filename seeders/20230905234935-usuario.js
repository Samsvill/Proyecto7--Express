'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(usuario, [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        idUsuario: 1,
        nombre: "joseph",
        apellido: "carabajo",
        email: "john@example.com",
        contrasena: "clave"
      },
      ], {});
  },

  async down (queryInterface, Sequelize) {
      /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
      await queryInterface.bulkDelete(usuario, null, {});
    }
  
};
