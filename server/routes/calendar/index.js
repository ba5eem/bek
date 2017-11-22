//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const getcal      = require('./getcal');
const postcal     = require('./postcal');
const putcal      = require('./putcal');
const delcal     = require('./delcal');
const singlecal      = require('./singlecal');



route.use('/all', getcal);
route.use('/new', postcal);
route.use('/edit', putcal);
route.use('/delete', delcal);
route.use('/:id', singlecal);




module.exports = route;