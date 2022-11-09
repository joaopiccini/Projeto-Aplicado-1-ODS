'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Cidades', [
      {
        nome_cidade: 'Chapecó',
        id_estado: 1,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cidade: 'Xaxim',
        id_estado: 1,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cidade: 'Porto Alegre',
        id_estado: 2,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cidade: 'Caxias do Sul',
        id_estado: 2,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cidade: 'Pato Branco',
        id_estado: 3,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cidade: 'Curitiba',
        id_estado: 3,
        createdAt: new Date(),
				updatedAt: new Date()
      },
    ], {})

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cidades', null, {})
  }

};
