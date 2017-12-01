'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
    {
      email: 'helloworld@gmailbek.com',
      familyname: 'Smith',
      givenname: 'John',
      googleid: '112587183780205170008',
      image: 'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
      phone: '8087280608',
      name: 'John_Smith',
      admin: false,
      hours: 20,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    },
    {
      email: 'captain@gmailbek.com',
      familyname: 'Stewar',
      givenname: 'Patick',
      googleid: '112587183780205170008',
      image: 'http://bit.ly/2AlXfAL',
      phone: '6122762292',
      name: 'Capt.Jean-Luc.Picard',
      admin: false,
      hours: 90,
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
      name: 'Admin',
      admin: true,
      hours: 25,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    },
    {
      email: 'coder4life@gmailbek.com',
      familyname: 'Hunt',
      givenname: 'Ethan',
      googleid: '113587183780215170004',
      image: 'https://marketplace.canva.com/MAB2sr5s7Q8/1/thumbnail/canva-business-people-design-person-icon--MAB2sr5s7Q8.png',
      phone: '8087280608',
      name: 'Ethan_Hunt',
      admin: false,
      hours: 30,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    },
    {
      email: 'abc123@gmailbek.com',
      familyname: 'Elememtary',
      givenname: 'Sherlock',
      googleid: '112586183780205170509',
      phone: '8087280608',
      image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png',
      name: 'Sherlock_Elementary',
      admin: false,
      hours: 10,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    },
    {
      email: 'bestworker@gmailbek.com',
      familyname: 'Ligent',
      givenname: 'Dee',
      googleid: '113587183780205171107',
      image: 'https://icon-icons.com/icons2/582/PNG/512/woen-2_icon-icons.com_55032.png',
      phone: '6129982261',
      name: 'Dee_Ligent',
      admin: false,
      hours: 5,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    },
    {
      email: 'controllfreak@gmailbek.com',
      familyname: 'Lock',
      givenname: 'Amy',
      googleid: '112587183780205100102',
      image: 'https://static1.squarespace.com/static/57996996e6f2e17cc7257a63/t/5982b217cd0f682edf795d62/1501737506567/Screen+Shot+2016-10-26+at+10.21.24+AM.png',
      phone: '6129982261',
      name: 'Amy_Lock',
      admin: false,
      hours: 35,
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    }], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('user', null, {});
  }
};