'use strict';

const { DATEONLY } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Medicoes', [
      {
        id_medidor: 1,
        data_medicoes: new Date(),
        valor_medicoes: 394812,
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_medidor: 1,
        data_medicoes: new Date(),
        valor_medicoes: 394955,
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_medidor: 1,
        data_medicoes: new Date(),
        valor_medicoes: 395174,
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_medidor: 1,
        data_medicoes: new Date(),
        valor_medicoes: 395298,
				createdAt: new Date(),
				updatedAt: new Date()
      },
    ], {})

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Medicoes', null, {})
  }

};
