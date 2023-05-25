'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('drinks-ingredients-measures', 
    [
      { id_drinks: 1, id_ingredients: 37, id_measures: 28},
      { id_drinks: 1, id_ingredients: 38, id_measures: 41},
      { id_drinks: 1, id_ingredients: 39, id_measures: 41},
      { id_drinks: 2, id_ingredients: 40, id_measures: 29},
      { id_drinks: 2, id_ingredients: 41, id_measures: 30},
      { id_drinks: 2, id_ingredients: 42, id_measures: 31},
      { id_drinks: 2, id_ingredients: 43, id_measures: 32},
      { id_drinks: 3, id_ingredients: 44, id_measures: 33},
      { id_drinks: 3, id_ingredients: 45, id_measures: 34},
      { id_drinks: 4, id_ingredients: 46, id_measures: 35},
      { id_drinks: 4, id_ingredients: 47, id_measures: 35},
      { id_drinks: 4, id_ingredients: 48, id_measures: 35},
      { id_drinks: 5, id_ingredients: 49, id_measures: 36},
      { id_drinks: 5, id_ingredients: 50, id_measures: 37},
      { id_drinks: 6, id_ingredients: 51, id_measures: 38},
      { id_drinks: 6, id_ingredients: 52, id_measures: 38},
      { id_drinks: 6, id_ingredients: 53, id_measures: 38},
      { id_drinks: 7, id_ingredients: 40, id_measures: 39},
      { id_drinks: 7, id_ingredients: 43, id_measures: 34},
      { id_drinks: 7, id_ingredients: 54, id_measures: 34},
      { id_drinks: 7, id_ingredients: 55, id_measures: 34},
      { id_drinks: 7, id_ingredients: 56, id_measures: 40},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('drinks-ingredients-measures', null, {});
  }
};
