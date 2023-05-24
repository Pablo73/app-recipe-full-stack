'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('meals_measures', {
      idMeasure: {
        type: Sequelize.INTEGER,
        field: 'id_measure',
        references: {
          model: 'measures',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      idMeals: {
        type: Sequelize.INTEGER,
        field: 'id_meals',
        references: {
          model: 'meals',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('meals_measures');
  }
};