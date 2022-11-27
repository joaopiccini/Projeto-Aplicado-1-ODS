'use strict';

const { DATEONLY } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Medicoes', [
      {
        id_medidor: 1,
        data_medicoes: '2022-11-20',
        valor_medicoes: 102,
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_medidor: 1,
        data_medicoes: '2022-11-21',
        valor_medicoes: 95,
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_medidor: 1,
        data_medicoes: '2022-11-22',
        valor_medicoes: 121,
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_medidor: 1,
        data_medicoes: '2022-11-23',
        valor_medicoes: 101,
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_medidor: 1,
        data_medicoes: '2022-11-24',
        valor_medicoes: 105,
				createdAt: new Date(),
				updatedAt: new Date()
      },
    ], {})

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Medicoes', null, {})
  }

};
