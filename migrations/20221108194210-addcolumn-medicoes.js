'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Medicoes', 'deletedAt', {
        allowNull: true,
        type: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Medicoes', 'deletedAt');
  }

};