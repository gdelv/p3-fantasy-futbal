'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'test',
      lastName: 'test',
      email: 'test@test.com',
      password: 'apassword',
      imgUrl: 'https://cdn2-www.comingsoon.net/assets/uploads/2018/08/conair-618x360.jpg',
      username: 'testUser',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users, null', {})
  }
};
