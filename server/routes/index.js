//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const users       = require('./users.js');
const cal         = require('./calendar.js');
const auth      = require('./auth.js');



route.use('/cal', cal);
route.use('/auth', auth);
route.use('/users', users);


module.exports = route;