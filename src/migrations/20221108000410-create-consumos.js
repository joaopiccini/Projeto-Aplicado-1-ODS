'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Consumos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_cliente:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Clientes', key: 'id'}
      },
      data_consumo: {
        type: Sequelize.DATEONLY
      },
      media_consumo: {
        type: Sequelize.FLOAT
      },
      fatura_consumo: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Consumos');
  }
  
};