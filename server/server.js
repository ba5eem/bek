const express         = require('express');
const session         = require('express-session');
const cookieSession   = require('cookie-session');
const bodyParser      = require('body-parser');
const passport        = require('passport');
const passportSetup   = require('./config/passport-setup');
const bcrypt          = require('bcrypt');
const routes          = require('./routes');
const path            = require('path');
const db              = require('./models');
const keys            = require('./config/keys');
const {user}          = db;
const Redis           = require('connect-redis')(session);
const cors            = require('cors')
const saltRounds      = 12;
const PORT            = process.env.PORT || 8080;
const app             = express();


//need this for deployment
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Authentication:
// set up session cookies
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [keys.session.cookieKey]
}))

// initialize passport
app.use(passport.initialize());
app.use(passport.session());
//Routes
app.use('/', routes);




app.get('/', ( req, res ) =>{
  res.json('Smoke Test');
});

app.get('*', ( req, res ) => {
  res.json('This page does not exist, 404 not found');
});

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '434997',
  key: '3b5ce37c85672acc6ea5',
  secret: 'dbaef820bfd25753647e',
  cluster: 'us2',
  encrypted: true
});

pusher.trigger('bek', 'my-event', {
  "message": "win for team bek"
});


const server = app.listen(PORT,() => {
  db.sequelize.sync( { force: false } ); //this is to link with your DB defined in the config file - set to true to overwrite, set to false to not overwrite:
  console.log(`Server connected on PORT: ${PORT}`);
});