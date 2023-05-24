'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('category_drinks', 
    [
      {name_category_drinks: 'Ordinary Drink'},
      {name_category_drinks: 'Cocktail'},
      {name_category_drinks: 'Shot'},
      {name_category_drinks: 'Punch / Party Drink'},
  ], {});
      },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('category_drinks', null, {});
  }
};