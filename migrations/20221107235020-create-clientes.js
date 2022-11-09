'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_cliente: {
        type: Sequelize.STRING
      },
      doc_cliente: {
        type: Sequelize.STRING
      },
      estado_cliente:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Estados', key: 'id'}
      },
      cidade_cliente:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Cidades', key: 'id'}
      },
      status_cliente: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Clientes');
  }
  
};