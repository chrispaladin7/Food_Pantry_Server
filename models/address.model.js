'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  Address.init(
    {
      address_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Automatically gets converted to SERIAL for postgres
      },
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip: DataTypes.INTEGER,
      country: DataTypes.STRING,
      location_name: DataTypes.STRING,
      primary_address: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Address',
    }
  );
  return Address;
};
