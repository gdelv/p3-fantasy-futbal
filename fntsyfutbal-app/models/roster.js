'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roster = sequelize.define('Roster', {
    user_id: DataTypes.INTEGER,
    player_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    player1: DataTypes.STRING,
    player2: DataTypes.STRING,
    player3: DataTypes.STRING,
    player4: DataTypes.STRING,
    player5: DataTypes.STRING,
    player6: DataTypes.STRING,
    player7: DataTypes.STRING,
    player8: DataTypes.STRING,
    player9: DataTypes.STRING,
    player10: DataTypes.STRING,
    imgUrl1: DataTypes.STRING,
    imgUrl2: DataTypes.STRING,
    imgUrl3: DataTypes.STRING,
    imgUrl4: DataTypes.STRING,
    imgUrl5: DataTypes.STRING,
    imgUrl6: DataTypes.STRING,
    imgUrl7: DataTypes.STRING,
    imgUrl8: DataTypes.STRING,
    imgUrl9: DataTypes.STRING,
    imgUrl10: DataTypes.STRING,

  }, {});

  Roster.associate = function(models) {
    // Roster.belongsTo(models.User, {
    //   foreignKey: "user_id",
      
    // })
    Roster.belongsToMany(models.Player, {
      through: models.Join,
      foreignKey: 'roster_id'
    })
  };
  return Roster;
};