'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
    {
      email: 'helloworld@gmailbek.com',
      familyname: 'Smith',
      givenname: 'John',
      googleid: '112587183780205170008',
      image: 'http://www.eds.org.nz/assets/img/head%20and%20shoulders%20image%20male.png',
      phone: '8087280608',
      name: 'John_Smith',
      admin: false,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    },
    {
      email: 'cohortuser19@gmail.com',
      familyname: 'user',
      givenname: 'cohort',
      googleid: '112587183780205170008',
      image: 'https://png.icons8.com/nolan/1600/admin',
      phone: '6129982261',
      name: 'cohort user',
      admin: true,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    },
    {
      email: 'coder4life@gmailbek.com',
      familyname: 'Hunt',
      givenname: 'Ethan',
      googleid: '113587183780215170004',
      image: 'http://www.eds.org.nz/assets/img/head%20and%20shoulders%20image%20male.png',
      phone: '8087280608',
      name: 'Ethan_Hunt',
      admin: false,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    },
    {
      email: 'abc123@gmailbek.com',
      familyname: 'Elememtary',
      givenname: 'Sherlock',
      googleid: '112586183780205170509',
      phone: '8087280608',
      image: 'http://www.eds.org.nz/assets/img/head%20and%20shoulders%20image%20male.png',
      name: 'Sherlock_Elementary',
      admin: false,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    },
    {
      email: 'bestworker@gmailbek.com',
      familyname: 'Ligent',
      givenname: 'Dee',
      googleid: '113587183780205171107',
      image: 'http://www.eds.org.nz/assets/img/head%20and%20shoulders%20image%20male.png',
      phone: '6129982261',
      name: 'Dee_Ligent',
      admin: false,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    },
    {
      email: 'controllfreak@gmailbek.com',
      familyname: 'Lock',
      givenname: 'Amy',
      googleid: '112587183780205100102',
      image: 'http://www.eds.org.nz/assets/img/head%20and%20shoulders%20image%20male.png',
      phone: '6129982261',
      name: 'Amy_Lock',
      admin: false,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    }], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('user', null, {});
  }
};