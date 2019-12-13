'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Rosters',
        'imgUrl6',
        Sequelize.STRING
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Rosters',
      'player7',
    )
  }
};
