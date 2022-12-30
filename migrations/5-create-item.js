'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      package_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Packages',
          key: 'package_id',
          as: 'package_id',
        },
      },

      item_name: {
        type: Sequelize.STRING,
      },

      peanut_preferences: {
        type: Sequelize.BOOLEAN,
      },

      dairy_preferences: {
        type: Sequelize.BOOLEAN,
      },

      fish_preferences: {
        type: Sequelize.BOOLEAN,
      },

      egg_preferences: {
        type: Sequelize.BOOLEAN,
      },

      best_before_date: {
        type: Sequelize.DATE,
      },

      quantity: {
        type: Sequelize.INTEGER,
      },

      perishable_status: {
        type: Sequelize.BOOLEAN,
      },

      weight: {
        type: Sequelize.FLOAT,
      },

      weight_units: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Roles');
  },
};
