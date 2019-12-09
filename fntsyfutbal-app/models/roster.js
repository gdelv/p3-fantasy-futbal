'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roster = sequelize.define('Roster', {
    user_id: DataTypes.INTEGER,
    player_id: DataTypes.INTEGER,
    rosterTitle: DataTypes.STRING
  }, {});
  Roster.associate = function(models) {
    // associations can be defined here
  };
  return Roster;
};