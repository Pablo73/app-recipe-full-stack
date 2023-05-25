'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('glasses', 
    [
      {name_glass: 'Collins Glass'},
      {name_glass: 'Shot glass'},
      {name_glass: 'Wine Glass'},
      {name_glass: 'Martini Glass'},
      {name_glass: 'Beer mug'},
      {name_glass: 'Cocktail glass'},
  ], {});
      },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('glasses', null, {});
  }
};
