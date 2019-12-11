'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Joins', [{
      player_id: 1,
      roster_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Joins', null, {})
  }
};
