'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      // BelongsTo Associations
      Item.belongsTo(models.Package, {
        foreignKey: 'package_id',
      });
    }
  }
  Item.init(
    {
      item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      item_name: DataTypes.STRING,
      peanut_preferences: DataTypes.BOOLEAN,
      dairy_preferences: DataTypes.BOOLEAN,
      fish_preferences: DataTypes.BOOLEAN,
      egg_preferences: DataTypes.BOOLEAN,
      best_before_date: DataTypes.DATE,
      quantity: DataTypes.INTEGER,
      perishable_status: DataTypes.BOOLEAN,
      weight: DataTypes.FLOAT,
      weight_units: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Item',
    }
  );
  return Item;
};
