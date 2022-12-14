'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Clientes', 'deletedAt', {
        allowNull: true,
        type: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Clientes', 'deletedAt');
  }

};