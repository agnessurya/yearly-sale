'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Sales',
   [
    {
      month : 'January',
      sale: 2000,
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      month : 'February',
      sale: 12000,
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      month : 'March',
      sale: 9000,
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      month : 'April',
      sale: 10000,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      month : 'May',
      sale: 6000,
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      month : 'June',
      sale: 4000,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      month : 'July',
      sale : 1000,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      month : 'August',
      sale: 7000,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, 
    {
      month : 'September',
      sale: 11000,
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      month : 'October',
      sale : 5000,
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      month : 'November',
      sale : 3000,
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      month : 'December',
      sale : 8000,
      createdAt : new Date(),
      updatedAt : new Date(),
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Sales', null, {});
  }
};
