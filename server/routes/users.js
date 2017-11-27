//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const db          = require('../models');
const {user}      = db;

// const Users = require('../models/User');

// const seedUsers = [
//   {
//     email: 'helloworld@gmail.com',
//     familyname: 'Smith',
//     givenname: 'John',
//     googleid: '113587183780705170008',
//     image: 'https://static.dnnsharp.com/icons/user77.png',
//     name: 'John_Smith',
//     admin: false
//   },
//   {
//     email: 'goodbyeworld@gmail.com',
//     familyname: 'Taylor',
//     givenname: 'Bob',
//     googleid: '113586183280705170008',
//     image: 'https://static.dnnsharp.com/icons/user77.png',
//     name: 'Bob_Taylor',
//     admin: false
//   },
//   {
//     email: 'codemaker10@gmail.com',
//     familyname: 'Hipster',
//     givenname: 'Ethan',
//     googleid: '114587183780705170005',
//     image: 'https://static.dnnsharp.com/icons/user77.png',
//     name: 'Ethan_Hipster',
//     admin: true
//   },
//   {
//     email: 'abc123@gmail.com',
//     familyname: 'Webster',
//     givenname: 'Sheila',
//     googleid: '113587183781705170308',
//     image: 'https://static.dnnsharp.com/icons/user77.png',
//     name: 'Sheila_Webster',
//     admin: false
//   },
//   {
//     email: 'shoutitout@gmail.com',
//     familyname: 'Sing',
//     givenname: 'Lola',
//     googleid: '113587183780705470004',
//     image: 'https://static.dnnsharp.com/icons/user77.png',
//     name: 'Lola_Sing',
//     admin: true
//   }
// ];
// const users = new Users(seedUsers);
//---------------------------------

  route.post('/', (req,res) => {
    let body = req.body;
    let local = {};
    user.create({
      email: body.email,
      familyname: body.familyName,
      givenname: body.givenName,
      googleid: body.googleId,
      image: body.imageUrl,
      name: body.name,
      admin: false
    })
    .then((user) => {
      local.fullname = user.name;
      local.id = user.id;
      local.image = user.image;
      res.json(local)
    })
    .catch((err) => {
      return res.json(null)
    })
  })

module.exports = route;