'use strict';
module.exports = (sequelize, DataTypes) => {
  const Join = sequelize.define('Join', {
    name: DataTypes.STRING
  }, {});
  Join.associate = function(models) {
    // associations can be defined here
  };
  return Join;
};