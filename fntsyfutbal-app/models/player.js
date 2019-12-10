'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    roster_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {});

  Player.associate = function(models) {
    Player.belongsTo(models.Roster, {
      foreignKey: 'roster_id',
      onDelete: 'CASCADE'
    })
  };
  return Player;
};