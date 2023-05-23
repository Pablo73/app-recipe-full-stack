'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('areas', 
     [
      {name_area: 'Turkish'},
      {name_area: 'Japanese'},
      {name_area: 'Filipino'},
      {name_area: 'Egyptian'},
    ],
    {}
    );
  
  },
  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('areas', null, {});
  }
};
