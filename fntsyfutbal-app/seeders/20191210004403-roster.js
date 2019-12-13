'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rosters', [{
      // user_id: 2,
      // UserId: '',
  
      // player_id: 1,
      title: 'My First Roster',
      createdAt: new Date(),
      updatedAt: new Date(),
      player1: 'dude',
      imgUrl1: 'dude',
      player2: 'dude',
      imgUrl2: 'dude',
      player3: 'dude',
      imgUrl3: 'dude',
      player4: 'dude',
      imgUrl4: 'dude',
      player5: 'dude',
      imgUrl5: 'dude',
      player6: 'dude',
      imgUrl6: 'dude',
      player7: 'dude',
      imgUrl7: 'dude',
      player8: 'dude',
      imgUrl8: 'dude',
      player9: 'dude',
      imgUrl9: 'dude',
      player10: 'dude',
      imgUrl10: 'dude',

    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rosters, null', {})
  }
};
