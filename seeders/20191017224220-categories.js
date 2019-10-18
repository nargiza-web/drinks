'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Categories", [
      {name:"Smoothie Banana", createdAt: new Date(), updatedAt: new Date()},
      {name:"Smoothie Freezer", createdAt: new Date(), updatedAt: new Date()},
      {name: "Merry Baert", createdAt: new Date(), updatedAt: new Date()},
      {name:"Mango Smoothie", createdAt: new Date(), updatedAt:new Date()}
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
