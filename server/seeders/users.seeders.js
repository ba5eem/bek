'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
    {
      email: 'helloworld@gmail.com',
      familyname: 'Smith',
      givenname: 'John',
      googleid: '112587183780205170008',
      image: 'http://www.eds.org.nz/assets/img/head%20and%20shoulders%20image%20male.png',
      name: 'John_Smith',
      admin: false,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    },
    {
      email: 'coder4life@gmail.com',
      familyname: 'Hunt',
      givenname: 'Ethan',
      googleid: '113587183780215170004',
      image: 'http://www.eds.org.nz/assets/img/head%20and%20shoulders%20image%20male.png',
      name: 'Ethan_Hunt',
      admin: false,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    },
    {
      email: 'abc123@gmail.com',
      familyname: 'Elememtary',
      givenname: 'Sherlock',
      googleid: '112586183780205170509',
      image: 'http://www.eds.org.nz/assets/img/head%20and%20shoulders%20image%20male.png',
      name: 'Sherlock_Elementary',
      admin: true,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    },
    {
      email: 'bestworker@gmail.com',
      familyname: 'Ligent',
      givenname: 'Dee',
      googleid: '113587183780205171107',
      image: 'http://www.eds.org.nz/assets/img/head%20and%20shoulders%20image%20male.png',
      name: 'Dee_Ligent',
      admin: false,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    },
    {
      email: 'controllfreak@gmail.com',
      familyname: 'Lock',
      givenname: 'Amy',
      googleid: '112587183780205100102',
      image: 'http://www.eds.org.nz/assets/img/head%20and%20shoulders%20image%20male.png',
      name: 'Amy_Lock',
      admin: true,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    }], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('user', null, {});
  }
};