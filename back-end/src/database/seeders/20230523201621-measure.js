'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('measures',
      [
        { name_measure: '1' },
        { name_measure: '4' },
        { name_measure: '6' },
        { name_measure: '3 cloves' },
        { name_measure: '5 tablespoons' },
        { name_measure: 'Spinkling' },
        { name_measure: 'As required' },
        { name_measure: '3 parts' },
        { name_measure: '1 lb' },
        { name_measure: '1 Cup' },
        { name_measure: '2 Cup' },
        { name_measure: '3 Cup' },
        { name_measure: '1/4 Cup' },
        { name_measure: '1 large' },
        { name_measure: '1 tbs' },
        { name_measure: '2 tbs' },
        { name_measure: '3 tbs' },
        { name_measure: '4 tbs' },
        { name_measure: '1 tsp' },
        { name_measure: '2 tsp' },
        { name_measure: '1/2 tsp' },
        { name_measure: '1/4 tsp' },
        { name_measure: '4 cups' },
        { name_measure: 'pinch' },
        { name_measure: '1 pinch' },
        { name_measure: '100ml' },
        { name_measure: '300ml' },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('measures', null, {});
  }
};
