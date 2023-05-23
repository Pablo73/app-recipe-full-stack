'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('categories', 
     [
      {nameCategory: 'Side'},
      {nameCategory: 'Seafood'},
      {nameCategory: 'Beef'},
      {nameCategory: 'Vegetarian'},
    ],
    {}
    );
  
  },
  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('People', null, {});
  }
};
