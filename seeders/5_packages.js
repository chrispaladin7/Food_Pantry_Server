'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Packages',
            [
                {
                    package_id: 1,
                    donor_name: "Joe's Pizza",
                    package_description: 'A Pizza shop good deed',
                    package_type: 'Savoury',
                    date_for_pickup: new Date('December 2, 2022 03:00:00'),
                    status: 'Available',
                    // this needs work 
                    // should be some thing like type address or linked to entry in address table
                    // if type then create and define 
                    location: 'W 34th St Outside 12 Penn Plaza, New York',
                    comment: 'Blah blah blah',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    package_id: 2,
                    donor_name: 'Subway',
                    package_description: 'BMT Sub + Subway Club from Subway',
                    package_type: 'Fast Food',
                    date_for_pickup: new Date('11/2/2020 5:21:20'),
                    status: 'Available',
                    // this needs work 
                    // should be some thing like type address or linked to entry in address table
                    // if type then create and define 
                    location: 'Outside 15 Journal Square Plaza, Jersey',
                    comment: 'Blah blah blah',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    package_id: 3,
                    donor_name: 'Dunkin Donut',
                    package_description: '6 Donuts from Dunkin Donut',
                    package_type: 'Savoury',
                    date_for_pickup: new Date('5/3/2021 12:23:45'),
                    status: 'Available',
                    // this needs work 
                    // should be some thing like type address or linked to entry in address table
                    // if type then create and define 
                    location: 'W 34th St Outside 12 Penn Plaza, New York',
                    comment: 'Blah blah blah',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    package_id: 4,
                    donor_name: 'Two Bros',
                    package_description: "A Pizza shop's good deed",
                    package_type: 'Savoury',
                    date_for_pickup: new Date('December 1, 2022 03:00:00'),
                    status: 'Available',
                    // this needs work 
                    // should be some thing like type address or linked to entry in address table
                    // if type then create and define 
                    location: 'W 33th St, New York',
                    comment: 'Blah blah blah',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    package_id: 5,
                    donor_name: 'Salad Bar',
                    package_description: 'Salad from Subway',
                    package_type: 'Healthy',
                    date_for_pickup: new Date('10/11/2020 4:03:10'),
                    status: 'Available',
                    // this needs work 
                    // should be some thing like type address or linked to entry in address table
                    // if type then create and define 
                    location: '33rd Street, New York',
                    comment: 'Blah blah blah',

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Packages', null, {});
    },
};
