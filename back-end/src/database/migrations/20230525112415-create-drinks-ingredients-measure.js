'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('drinks-ingredients-measures', {
      idDrinks: {
        type: Sequelize.INTEGER,
        field: 'id_drinks',
        references: {
          model: 'drinks',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
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
      idMeasures: {
        type: Sequelize.INTEGER,
        field: 'id_Measures',
        references: {
          model: 'measures',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('drinks-ingredients-measures');
  }
};