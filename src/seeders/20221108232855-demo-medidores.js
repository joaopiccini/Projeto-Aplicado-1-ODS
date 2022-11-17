'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Medidores', [
      {
        id_cliente: 1,
        nome_medidor: 'Hidrômetro Multijato 1 Polegada',
        cod_medidor: '427935878',
        status_medidor: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_cliente: 2,
        nome_medidor: 'Hidrômetro Multijato 2 Polegada',
        cod_medidor: '120935478',
        status_medidor: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_cliente: 3,
        nome_medidor: 'Hidrômetro Unijato 3/4pol. Dn20',
        cod_medidor: '927325871',
        status_medidor: 'I',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_cliente: 4,
        nome_medidor: 'Hidrômetro Multijato 2 Polegada',
        cod_medidor: '009329873',
        status_medidor: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_cliente: 6,
        nome_medidor: 'Hidrômetro Unijato 1/2pol.',
        cod_medidor: '709319177',
        status_medidor: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_cliente: 7,
        nome_medidor: 'Hidrômetro Multijato 1 Polegada',
        cod_medidor: '306883983',
        status_medidor: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_cliente: 9,
        nome_medidor: 'Hidrômetro Unijato 3/4pol. Dn20',
        cod_medidor: '312936941',
        status_medidor: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_cliente: 10,
        nome_medidor: 'Hidrômetro Unijato 1/2pol.',
        cod_medidor: '378746960',
        status_medidor: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_cliente: 11,
        nome_medidor: 'Hidrômetro Unijato 1/2pol.',
        cod_medidor: '091329896',
        status_medidor: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        id_cliente: 12,
        nome_medidor: 'Hidrômetro Multijato 2 Polegada',
        cod_medidor: '881449156',
        status_medidor: 'A',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_medidor: 'Hidrômetro Multijato 2 Polegada',
        cod_medidor: '691249111',
        status_medidor: 'R',
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome_medidor: 'Hidrômetro Unijato 3/4pol. Dn20',
        cod_medidor: '142865552',
        status_medidor: 'R',
				createdAt: new Date(),
				updatedAt: new Date()
      },
    ], {})

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Medidores', null, {})
  }

};
