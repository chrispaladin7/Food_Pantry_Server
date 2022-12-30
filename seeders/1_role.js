'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          user_type: 'courier',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_type: 'receiver',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_type: 'donor',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_type: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
