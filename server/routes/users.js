//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const db          = require('../models');
const {user}      = db;

route.get('/', ( req, res ) => {
  let local = {}
  user.findAll({
    attributes: {
      exclude : ['googleid', 'familyname','givenname','phone','createdAt','updatedAt']
    }
  })
  .then((users) => {
    res.json(users);
  });
});

route.get('/phone', ( req, res ) => {
  let local = []
  user.findAll({raw:true})
  .then((users) => {
    for (var i = 0; i < users.length; i++){
      local.push(users[i].phone);
    }
    res.json(local);
  });
});

route.get('/:id', ( req, res ) => {
  let id = req.params.id;
  user.findById(id)
  .then((data) => {
    res.json(data);
  });
});

route.post('/', (req,res) => {
  let body = req.body;
  let local = {};
  console.log('posting body--->')
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
    console.log('user ---->serverroutes,', user)
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