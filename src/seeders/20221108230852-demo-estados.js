'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Estados', [
      {
        nome_estado: 'Santa Catarina',
        uf_estado: 'SC',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_estado: 'Rio Grande do Sul',
        uf_estado: 'RS',
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_estado: 'Paraná',
        uf_estado: 'PR',
        createdAt: new Date(),
				updatedAt: new Date()
      }
    ], {})

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Estados', null, {})
  }

};
