const express         = require('express');
const bodyParser      = require('body-parser');
const bcrypt          = require('bcrypt');
const routes          = require('./routes');
const path            = require('path');
const db              = require('./models');
const {user}          = db;
const cors            = require('cors')
const PORT            = process.env.PORT || 8080;
const app             = express();


//need this for deployment
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));






//Routes
app.use('/api', routes);

app.get('/', ( req, res ) =>{
  res.json('Smoke Test');
});

app.get('*', ( req, res ) => {
  res.json('This page does not exist, 404 not found');
});

const server = app.listen(PORT,() => {
  db.sequelize.sync( { force: false } ); //this is to link with your DB defined in the config file - set to true to overwrite, set to false to not overwrite:
  console.log(`Server connected on PORT: ${PORT}`);
});