'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Packages', {
      package_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },

      package_description: {
        type: Sequelize.STRING,
      },

      donor_name: {
        type: Sequelize.STRING,
      },

      package_type: {
        type: Sequelize.STRING,
      },

      date_for_pickup: {
        type: Sequelize.DATE,
      },

      status: {
        type: Sequelize.STRING,
      },

      location: {
        type: Sequelize.STRING,
      },

      comment: {
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
