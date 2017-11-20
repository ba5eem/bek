const express          = require('express');
const app              = express();
const passport         = require('passport');
const bcrypt           = require('bcrypt');
const LocalStrategy    = require('passport-local').Strategy;
const saltRounds       = 12;
const route            = express.Router();
const db               = require('../models');
const {role}          = db;

route.get('/', ( req, res ) => {
  let value = req.isAuthenticated();
  role.findAll()
  .then((roles) => {
    //VIP: filter out any user data
    //res.json(roles);
    res.json("roles page");
  });
});

route.get('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  let id = req.params.id;
  role.findById(id)
  .then((role) => {
    //VIP: filter out any user data
    res.json(role);
  });
});

route.put('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  let id = req.params.id;
  let edited = req.body;

  return role.findById(id)
  .then((role) => {
    return role.update(edited,{
      returning: true,
      plain: true
    })
    .then((role)=>{
      //VIP: filter out any user data
      return res.json(role);
    })
  })
})

route.delete('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  let id = req.params.id;
  let data = req.body;

  return role.update({
      status: 'closed'
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((role) => {
      //VIP: filter out any user data
    res.json(role);
  })
});


module.exports = route;