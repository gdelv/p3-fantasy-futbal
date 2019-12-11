'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    roster_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {});

  Player.associate = function(models) {
    Player.belongsToMany(models.Roster, {
      through: models.Join,
      foreignKey: 'player_id',
      onDelete: 'CASCADE'
    })
  };
  return Player;
};