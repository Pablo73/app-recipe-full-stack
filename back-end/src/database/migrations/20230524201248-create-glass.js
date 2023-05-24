'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('glasses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameGlass: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name_glass'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('glasses');
  }
};