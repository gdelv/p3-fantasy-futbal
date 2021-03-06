'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Rosters',
        'player6',
        Sequelize.STRING
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Rosters',
      'imgUrl6',
    )
  }
};
