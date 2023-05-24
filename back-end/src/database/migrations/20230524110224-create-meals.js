'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('meals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      strArea: {
        type: Sequelize.INTEGER,
        field: 'str_area',
        references: {
          model: 'areas',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      strCategory: {
        type: Sequelize.INTEGER,
        field: 'str_category',
        references: {
          model: 'categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      strImageSource: {
        type: Sequelize.STRING,
        field: 'str_image_source',
      },
      strInstructions: {
        type: Sequelize.STRING,
        field: 'str_instructions',
      },
      strMealThumb: {
        type: Sequelize.STRING,
        field: 'str_meal_thumb',
      },
      strMeal: {
        type: Sequelize.STRING,
        field: 'str_meal',
      },
      strTags: {
        type: Sequelize.STRING,
        field: 'str_tags',
      },
      strYoutube: {
        type: Sequelize.STRING,
        field: 'str_youtube',
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('meals');
  }
};