'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receiver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Receiver.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  Receiver.init(
    {
      receiver_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Automatically gets converted to SERIAL for postgres
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      number_of_request: DataTypes.INTEGER,
      number_of_received_deliveries: DataTypes.INTEGER,
      vegan: DataTypes.BOOLEAN,
      pescatarian: DataTypes.BOOLEAN,
      vegetarain: DataTypes.BOOLEAN,
      kosher: DataTypes.BOOLEAN,
      celiac_desease: DataTypes.BOOLEAN,
      peanut_allergy: DataTypes.BOOLEAN,
      dairy_allergy: DataTypes.BOOLEAN,
      seafood_allergy: DataTypes.BOOLEAN,
      egg_allergy: DataTypes.BOOLEAN,
      time_frame_start: DataTypes.DATE,
      time_frame_end: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Receiver',
    }
  );
  return Receiver;
};
