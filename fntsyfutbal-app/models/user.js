'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    roster_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Roster, {
      // foreignKey: roster_id,
      onDelete: CASCADE
    })

  };
  return User;
};