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
      exclude : ['googleid', 'familyname','givenname','createdAt','updatedAt']
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




route.put('/:id/editphone', ( req, res ) => {
  let id = req.params.id;
  console.log('-------->ID',id)
  let newPhone = req.body.phone;
  console.log('route newInfo(1)--->', newPhone)
  return user.findById(id)
  .then((user) => {
    console.log('route then user (2)--->', user)
    return user.update({phone: newPhone},{where: {id: id}})
    .then((phone)=>{
      console.log('route then after update phone (3)--->', phone)
      return res.json(phone);
    })
  })
})


module.exports = route;