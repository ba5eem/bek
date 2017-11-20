'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('shifts',[{}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('shifts',null )
  }
};