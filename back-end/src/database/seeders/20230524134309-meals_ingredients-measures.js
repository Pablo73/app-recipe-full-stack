'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('meals_ingredients_measures', 
    [
      { id_meals: 1, id_ingredients: 1, id_measure: 1},
      { id_meals: 1, id_ingredients: 2, id_measure: 14},
      { id_meals: 1, id_ingredients: 3, id_measure: 14},
      { id_meals: 1, id_ingredients: 4, id_measure: 15},
      { id_meals: 1, id_ingredients: 5, id_measure: 20},
      { id_meals: 1, id_ingredients: 6, id_measure: 19},
      { id_meals: 1, id_ingredients: 7, id_measure: 21},
      { id_meals: 1, id_ingredients: 8, id_measure: 21},
      { id_meals: 1, id_ingredients: 9, id_measure: 22},
      { id_meals: 1, id_ingredients: 10, id_measure: 22},
      { id_meals: 1, id_ingredients: 11, id_measure: 23},
      { id_meals: 1, id_ingredients: 12, id_measure: 10},
      { id_meals: 1, id_ingredients: 13, id_measure: 24},
      { id_meals: 2, id_ingredients: 14, id_measure: 27},
      { id_meals: 2, id_ingredients: 15, id_measure: 26},
      { id_meals: 2, id_ingredients: 16, id_measure: 16},
      { id_meals: 2, id_ingredients: 17, id_measure: 17},
      { id_meals: 2, id_ingredients: 18, id_measure: 15},
      { id_meals: 2, id_ingredients: 19, id_measure: 15},
      { id_meals: 2, id_ingredients: 19, id_measure: 9},
      { id_meals: 3, id_ingredients: 20, id_measure: 5},
      { id_meals: 3, id_ingredients: 19, id_measure: 1},
      { id_meals: 3, id_ingredients: 21, id_measure: 9},
      { id_meals: 3, id_ingredients: 22, id_measure: 4},
      { id_meals: 3, id_ingredients: 23, id_measure: 8},
      { id_meals: 3, id_ingredients: 24, id_measure: 18},
      { id_meals: 3, id_ingredients: 25, id_measure: 10},
      { id_meals: 3, id_ingredients: 26, id_measure: 25},
      { id_meals: 4, id_ingredients: 27, id_measure: 12},
      { id_meals: 4, id_ingredients: 28, id_measure: 3},
      { id_meals: 4, id_ingredients: 29, id_measure: 2},
      { id_meals: 4, id_ingredients: 30, id_measure: 13},
      { id_meals: 4, id_ingredients: 31, id_measure: 20},
      { id_meals: 4, id_ingredients: 32, id_measure: 19},
      { id_meals: 4, id_ingredients: 33, id_measure: 21},
      { id_meals: 4, id_ingredients: 34, id_measure: 6},
      { id_meals: 4, id_ingredients: 35, id_measure: 7},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('meals_ingredients_measures', null, {});
  }
};
