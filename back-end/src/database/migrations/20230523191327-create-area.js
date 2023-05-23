'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('areas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameArea: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name_area'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('areas');
  }
};
