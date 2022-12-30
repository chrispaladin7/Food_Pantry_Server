'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Role extends Model {
    static associate(models) {
      User_Role.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      User_Role.belongsTo(models.Role, {
        foreignKey: 'role_id',
      });
    }
  }
  User_Role.init(
    {
      user_role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User_Role',
    }
  );
  return User_Role;
};
