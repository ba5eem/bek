'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users',[{}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('users',null )
  }
};