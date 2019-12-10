'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rosters', [{
      user_id: 2,
      player_id: 1,
      title: 'My First Roster',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Rosters, null', {})
  }
};
