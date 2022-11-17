'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Clientes', [
      {
        nome_cliente: 'João',
        doc_cliente: '51159500061',
        estado_cliente: 1,
        cidade_cliente: 1,
        status_cliente: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cliente: 'Pedro',
        doc_cliente: '26961285023',
        estado_cliente: 1,
        cidade_cliente: 1,
        status_cliente: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cliente: 'Willian',
        doc_cliente: '65735116037',
        estado_cliente: 1,
        cidade_cliente: 2,
        status_cliente: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cliente: 'Thainá',
        doc_cliente: '28288273050',
        estado_cliente: 1,
        cidade_cliente: 2,
        status_cliente: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cliente: 'Batman',
        doc_cliente: '65651983066',
        estado_cliente: 2,
        cidade_cliente: 1,
        status_cliente: 'I',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cliente: 'Jackie Chan',
        doc_cliente: '64037537036',
        estado_cliente: 2,
        cidade_cliente: 1,
        status_cliente: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cliente: 'Sabrina Sato',
        doc_cliente: '75723199048',
        estado_cliente: 2,
        cidade_cliente: 2,
        status_cliente: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cliente: 'LeBron James',
        doc_cliente: '95951163005',
        estado_cliente: 2,
        cidade_cliente: 2,
        status_cliente: 'I',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cliente: 'Valério',
        doc_cliente: '89488982055',
        estado_cliente: 3,
        cidade_cliente: 1,
        status_cliente: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cliente: 'Xuxa',
        doc_cliente: '86148248077',
        estado_cliente: 3,
        cidade_cliente: 1,
        status_cliente: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cliente: 'Uberdam',
        doc_cliente: '14479501002',
        estado_cliente: 3,
        cidade_cliente: 2,
        status_cliente: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_cliente: 'Doglas',
        doc_cliente: '64412430081',
        estado_cliente: 3,
        cidade_cliente: 2,
        status_cliente: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
    ], {})

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Clientes', null, {})
  }

};
