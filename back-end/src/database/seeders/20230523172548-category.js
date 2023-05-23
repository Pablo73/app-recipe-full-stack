'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('categories', 
     [
      {str_category: 'Side'},
      {str_category: 'Seafood'},
      {str_category: 'Beef'},
      {str_category: 'Vegetarian'},
    ],
    {}
    );
  
  },
  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('categories', null, {});
  }
};
