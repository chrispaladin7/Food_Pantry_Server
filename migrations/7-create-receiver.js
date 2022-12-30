'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Receivers', {
      receiver_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'user_id' },
        onDelete: 'CASCADE',
        constraints: true,
        unique: true,
      },

      first_name: {
        type: Sequelize.STRING,
      },

      last_name: {
        type: Sequelize.STRING,
      },

      number_of_request: {
        type: Sequelize.INTEGER,
      },

      number_of_received_deliveries: {
        type: Sequelize.INTEGER,
      },

      vegan: {
        type: Sequelize.BOOLEAN,
      },

      vegetarain: {
        type: Sequelize.BOOLEAN,
      },

      pescatarian: {
        type: Sequelize.BOOLEAN,
      },

      kosher: {
        type: Sequelize.BOOLEAN,
      },

      celiac_desease: {
        type: Sequelize.BOOLEAN,
      },

      peanut_allergy: {
        type: Sequelize.BOOLEAN,
      },

      dairy_allergy: {
        type: Sequelize.BOOLEAN,
      },

      seafood_allergy: {
        type: Sequelize.BOOLEAN,
      },

      egg_allergy: {
        type: Sequelize.BOOLEAN,
      },

      time_frame_start: {
        type: Sequelize.DATE,
      },

      time_frame_end: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('Receivers');
  },
};
