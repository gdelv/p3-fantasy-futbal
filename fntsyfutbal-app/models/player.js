'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    user_id: DataTypes.STRING,
    roster_id: DataTypes.STRING,
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};