'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('category_drinks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameCategoryDrinks: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name_category_drinks'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('category_drinks');
  }
};