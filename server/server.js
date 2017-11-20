const express         = require('express');
const session         = require('express-session');
const bodyParser      = require('body-parser');
const passport        = require('passport');
const bcrypt          = require('bcrypt');
const routes          = require('./routes');
const path            = require('path');
const db              = require('./models');
const {user}          = db;
const Redis           = require('connect-redis')(session);
const LocalStrategy   = require('passport-local').Strategy;
const cors            = require('cors')
const saltRounds      = 12;
const PORT            = process.env.PORT || 8080;
const app             = express();


//need this for deployment
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Authentication:
app.use(session({
  store: new Redis(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
//Routes
app.use('/api', routes);


passport.serializeUser((users,done) => {
  console.log("serializing");
  return done(null, {
    id: users.id,
    username: users.username
  });
});

passport.deserializeUser((users, done) => {
  console.log('deserializing');
  db.user.findOne({where: { id: users.id}})
  .then(user => {
    return done(null, {
      id: users.id,
      username: users.username
    });
  });
});

passport.use(new LocalStrategy(function(username, password, done) {
    db.user.findOne({where: { username: username } })
    .then( user => {
      if(user === null) {
        return done(null, false, {message: 'bad username or password'});
      }
      else {
        bcrypt.compare(password, user.password)
        .then (res => {
          console.log(res);
          if (res) {return done(null, user); }
          else {
            return done(null, false, {message: 'bad username or password'});
          }
        });
      }
    })
    .catch(err =>{
      console.error('error: ', err);
  });
}));


app.get('/', ( req, res ) =>{
  res.json('Smoke Test');
});

app.get('*', ( req, res ) => {
  res.json('This page does not exist, 404 not found');
});

const server = app.listen(PORT,() => {
  db.sequelize.sync( { force: true } ); //this is to link with your DB defined in the config file - set to true to overwrite, set to false to not overwrite:
  console.log(`Server connected on PORT: ${PORT}`);
});