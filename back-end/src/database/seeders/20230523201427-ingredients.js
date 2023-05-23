'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('ingredients', 
     [
      {name_ingredient: 'Lentils'},
      {name_ingredient: 'Onion'},
      {name_ingredient: 'Carrots'},
      {name_ingredient: 'Tomato Puree'},
      {name_ingredient: 'Cumin'},
      {name_ingredient: 'Paprika'},
      {name_ingredient: 'Mint'},
      {name_ingredient: 'Thyme'},
      {name_ingredient: 'Black Pepper'},
      {name_ingredient: 'Red Pepper Flakes'},
      {name_ingredient: 'Vegetable Stock'},
      {name_ingredient: 'Water'},
      {name_ingredient: 'Sea Salt'},
      {name_ingredient: 'Sushi Rice'},
      {name_ingredient: 'Rice wine'},
      {name_ingredient: 'Caster Sugar'},
      {name_ingredient: 'Mayonnaise'},
      {name_ingredient: 'Rice wine'},
      {name_ingredient: 'Soy Sauce'},
      {name_ingredient: 'Cucumber'},
      {name_ingredient: 'Beef'},
      {name_ingredient: 'Lemon'},
      {name_ingredient: 'Garlic'},
      {name_ingredient: 'Onion'},
      {name_ingredient: 'Olive Oil'},
      {name_ingredient: 'Water'},
      {name_ingredient: 'Salt'},
      {name_ingredient: 'Broad Beans'},
      {name_ingredient: 'Spring Onions'},
      {name_ingredient: 'Garlic Clove'},
      {name_ingredient: 'Parsley'},
      {name_ingredient: 'Cumin'},
      {name_ingredient: 'Baking Powder'},
      {name_ingredient: 'Cayenne Pepper'},
      {name_ingredient: 'Flour'},
      {name_ingredient: 'Vegetable Oil'},
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('ingredients', null, {});
  }
};
