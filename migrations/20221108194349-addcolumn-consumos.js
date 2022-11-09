'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Consumos', 'deletedAt', {
        allowNull: true,
        type: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Consumos', 'deletedAt');
  }

};