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
      player1: 'Ronaldo',
      imgUrl1: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg',
      player2: 'Messi',
      imgUrl2: 'https://cdn.vox-cdn.com/thumbor/vM0r7qizDqsT1WG4Uj73catzqXs=/0x0:3000x2047/1200x800/filters:focal(1260x784:1740x1264)/cdn.vox-cdn.com/uploads/chorus_image/image/63156830/1132647123.jpg.0.jpg',
      player3: 'Ronaldinho',
      imgUrl3: 'https://i.ytimg.com/vi/HI8Ijl9fLJQ/maxresdefault.jpg',
      player4: 'Gattuso',
      imgUrl4: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Gennaro_Gattuso_2008.jpg',
      player5: 'Andrea Pirlo',
      imgUrl5: 'https://i.dailymail.co.uk/i/pix/2014/06/11/article-2654913-1EA302B800000578-261_634x480.jpg',
      player6: 'Fabio Cannavaro',
      imgUrl6: 'https://m.media-amazon.com/images/M/MV5BNGNlMmU1ZTEtYzNhZi00NDhjLWJlMDMtOGEwM2VkYTA4ZWQyXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_UY1200_CR116,0,630,1200_AL_.jpg',
      player7: 'Ribery',
      imgUrl7: 'https://fcbayern.com/binaries/content/gallery/fc-bayern/homepage/saison-18-19/profis/ribery/181222_ribery_ima.jpg',
      player8: 'Kylian Mbappe',
      imgUrl8: 'https://specials-images.forbesimg.com/imageserve/5cfe85694c687b0008593562/416x416.jpg?background=000000&cropX1=19&cropX2=1756&cropY1=210&cropY2=1948',
      player9: 'Thierry Henry',
      imgUrl9: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2012/12/16/22/Pg-9s-wallace-getty.jpg?w968h681',
      player10: 'Alison Becker',
      imgUrl10: 'https://media.gettyimages.com/photos/alisson-becker-of-as-roma-dives-but-fails-to-stop-david-luiz-of-shot-picture-id862869176?s=612x612',

    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rosters, null', {})
  }
};
