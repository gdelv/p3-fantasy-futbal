'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roster = sequelize.define('Roster', {
    user_id: DataTypes.INTEGER,
    player_id: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  
  Roster.associate = function(models) {
    Roster.belongsTo(models.User, {
      foreignKey: user_id,
      onDelete: CASCADE
    })
    Roster.hasMany(models.Player, {
      foreignKey: player_id
    })
  };
  return Roster;
};