'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    static associate(models) {
      Package.hasMany(models.Item, {
        foreignKey: 'package_id',
      });
    }
  }
  Package.init(
    {
      package_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      donor_name: DataTypes.STRING,
      package_description: DataTypes.STRING,
      package_type: DataTypes.STRING,
      date_for_pickup: DataTypes.DATE,
      status: DataTypes.STRING,
      location: DataTypes.STRING,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Package',
    }
  );
  return Package;
};
