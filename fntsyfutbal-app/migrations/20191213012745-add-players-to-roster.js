'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
          'Rosters',
          'imgUrl10',
          Sequelize.STRING
        );
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'Rosters',
        'imgUrl10',
      )
    }
  };
