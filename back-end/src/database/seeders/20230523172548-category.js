'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('categories', 
     [
      {name_category: 'Side'},
      {name_category: 'Seafood'},
      {name_category: 'Beef'},
      {name_category: 'Vegetarian'},
    ],
    {}
    );
  
  },
  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('categories', null, {});
  }
};
