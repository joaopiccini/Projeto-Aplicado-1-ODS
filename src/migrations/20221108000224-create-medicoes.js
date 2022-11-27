'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Medicoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_medidor:{
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'Medidores', key: 'id'}
      },
      data_medicoes: {
        type: Sequelize.DATEONLY
      },
      valor_medicoes: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: true
      }
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
    await queryInterface.dropTable('Medicoes');
  }
  
};