'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Rosters',
        'player3',
        Sequelize.STRING
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Rosters',
      'player3',
    )
  }
};
