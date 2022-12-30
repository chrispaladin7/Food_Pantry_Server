('use strict');
var bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'courier@email.com',
          password: bcrypt.hashSync('PassWord123@', 10),
          bio: 'This is a courier type user!',
          activity_status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'donor@email.com',
          password: bcrypt.hashSync('PassWord123@', 10),
          bio: 'This is a donor type user!',
          activity_status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'receiver@email.com',
          password: bcrypt.hashSync('PassWord123@', 10),
          bio: 'This is a Receiver type user!',
          activity_status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'admin@email.com',
          password: bcrypt.hashSync('PassWord123@', 10),
          bio: 'This is a Admin type user!',
          activity_status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'receiver_2@email.com',
          password: bcrypt.hashSync('PassWord123@', 10),
          bio: 'This is a Receiver type user!',
          activity_status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
