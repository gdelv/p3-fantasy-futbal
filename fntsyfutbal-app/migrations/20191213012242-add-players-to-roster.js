'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Rosters',
        'player9',
        Sequelize.STRING
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Rosters',
      'player9',
    )
  }
};
