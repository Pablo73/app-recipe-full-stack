'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('measures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameMeasure: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name_measure'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('measures');
  }
};
