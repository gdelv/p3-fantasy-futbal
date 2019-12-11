'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roster = sequelize.define('Roster', {
    user_id: DataTypes.INTEGER,
    player_id: DataTypes.INTEGER,
    title: DataTypes.STRING
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