//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const users       = require('./users.js');
const login       = require('./login.js');
const shifts      = require('./shifts.js');
const chat        = require('./chat.js');
const sms         = require('./sms.js');
const logout      = require('./logout.js');
const six         = require('./six.js');
const eight       = require('./eight.js');
const custom      = require('./custom.js');
const accept      = require('./accept.js');
const acceptshift = require('./acceptshift.js');
const declineshift= require('./declineshift.js');


route.use('/acceptshift', acceptshift);
route.use('/declineshift', declineshift);
route.use('/accept', accept);
route.use('/custom', custom);
route.use('/eight', eight);
route.use('/six', six);
route.use('/shifts', shifts);
route.use('/login', login);
route.use('/users', users);
route.use('/chat', chat);
route.use('/sms', sms);
route.use('/logout', logout);
module.exports = route;