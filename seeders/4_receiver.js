'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Receivers',
      [
        {
          user_id: 5,
          first_name: 'Jon',
          last_name: 'Smith',
          number_of_request: 0,
          number_of_received_deliveries: 0,
          vegan: true,
          pescatarian: true,
          vegetarain: true,
          kosher: true,
          celiac_desease: true,
          peanut_allergy: true,
          dairy_allergy: true,
          seafood_allergy: true,
          egg_allergy: true,
          time_frame_start: new Date(),
          time_frame_end: new Date(),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Receivers', null, {});
  },
};
