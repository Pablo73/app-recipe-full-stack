'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('meals_ingredients', {
      idIngredients: {
        type: Sequelize.INTEGER,
        field: 'id_ingredients',
        references: {
          model: 'ingredients',
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
    await queryInterface.dropTable('meals_ingredients');
  }
};