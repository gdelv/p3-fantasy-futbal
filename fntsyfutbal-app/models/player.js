'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    roster_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    player2: DataTypes.STRING,
    imgUrl2: DataTypes.STRING,
    player3: DataTypes.STRING,
    imgUrl3: DataTypes.STRING,
    player4: DataTypes.STRING,
    imgUrl4: DataTypes.STRING,
    player5: DataTypes.STRING,
    imgUrl5: DataTypes.STRING,
    player6: DataTypes.STRING,
    imgUrl6: DataTypes.STRING,
    player7: DataTypes.STRING,
    imgUrl7: DataTypes.STRING,
    player8: DataTypes.STRING,
    imgUrl8: DataTypes.STRING,
    player9: DataTypes.STRING,
    imgUrl9: DataTypes.STRING,
    player10: DataTypes.STRING,
    imgUrl10: DataTypes.STRING,
    player11: DataTypes.STRING,
    imgUrl11: DataTypes.STRING,
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