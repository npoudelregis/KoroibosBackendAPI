'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sports', null, {});
  }
};
