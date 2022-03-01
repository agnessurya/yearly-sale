'use strict';
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10);
const password = bcrypt.hashSync('12345', salt);
console.log(password)
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
  
   await queryInterface.bulkInsert('Users',[{
      username: 'UserOne',
      password: bcrypt.hashSync("12345", salt),
      createdAt : new Date(),
      updatedAt : new Date(),
   },{
     username: 'UserTwo',
     password: bcrypt.hashSync("12345", salt),
     createdAt : new Date(),
     updatedAt : new Date(),
   }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('Users', null,{})
  }
};
