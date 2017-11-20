'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('roles',[{}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('roles',null )
  }
};