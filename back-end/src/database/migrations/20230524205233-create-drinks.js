'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('drinks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      strAlcoholic: {
        type: Sequelize.STRING,
        field: 'str_alcoholic',
      },
      strCategory: {
        type: Sequelize.INTEGER,
        field: 'str_category',
        references: {
          model: 'category_drinks',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      strDrink: {
        type: Sequelize.STRING,
        field: 'str_drink',
      },
      strDrinkThumb: {
        type: Sequelize.STRING,
        field: 'str_drink_thumb',
      },
      strGlass: {
        type: Sequelize.INTEGER,
        field: 'str_glass',
        references: {
          model: 'glasses',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true
      },
      strInstructions: {
        type: Sequelize.TEXT,
        field: 'str_instructions',
      },
      strInstructionsDE: {
        type: Sequelize.TEXT,
        field: 'str_instructionsDE',
      },
      strInstructionsES: {
        type: Sequelize.TEXT,
        field: 'str_instructionsES',
      },
      strInstructionsFR: {
        type: Sequelize.TEXT,
        field: 'str_instructionsFR',
      },
      strInstructionsIT: {
        type: Sequelize.TEXT,
        field: 'str_instructionsIT',
      },
      strTags: {
        type: Sequelize.STRING,
        field: 'str_tags',
      },
      strVideo: {
        type: Sequelize.STRING,
        field: 'str_video',
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('drinks');
  }
};