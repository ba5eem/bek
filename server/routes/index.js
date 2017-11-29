//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const users       = require('./users.js');
const login       = require('./login.js');
const shifts      = require('./calendar.js');
const chat        = require('./chat.js');
const sms         = require('./sms.js');
const logout      = require('./logout.js');

route.use('/shifts', shifts);
route.use('/login', login);
route.use('/users', users);
route.use('/chat', chat);
route.use('/sms', sms);
route.use('/logout', logout);
module.exports = route;