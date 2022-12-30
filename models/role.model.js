'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.User, {
        through: 'User_roles',
        foreignKey: 'role_id',
        otherKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Role.hasMany(models.User);
    }
  }
  Role.init(
    {
      role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_type: {
        type: DataTypes.ENUM('donor', 'receiver', 'courier', 'admin'),
        defaultValue: 'courier',
      },
    },
    {
      sequelize,
      modelName: 'Role',
    }
  );
  return Role;
};
