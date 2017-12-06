//app.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const models = require('./db');
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
User = mongoose.model("User");
//User = mongoose.model('User', User);
require('./auth');

//const flash = require('connect-flash');
//const morgan = require('morgan');
//const cookieParser = require('cookie-parser');

//const configDB = require('./config/db.js');

// enable sessions
const sessionOptions = {
	secret: 'secret cookie thang (store this elsewhere!)',
	resave: true,
	saveUninitialized: true
};

app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(sessionOptions));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
	res.locals.user = req.user;
	next();
});

//Code from Authentication Slides
passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user) {
		done(err, user);
	});
});

app.get("/about", (req, res) => {
  res.render('about.hbs', {layout:false});
});

app.get("/layout", (req, res) => {
  res.render('layout.hbs');
});

app.get('/', (req, res) => {
  const s = req.query.state;
  const q = {};
  if (s) {
    q.state = s;
  }
  res.render('registration.hbs', {layout:false});
});

app.post('/data', (req, res) => {
    const age = req.body.age;
    const gender = req.body.gender;
    const state = req.body.state;
    const ethnicity = req.body.ethnicity;
    const disease = req.body.disease;

    const search = new models.Search({
      age,
      gender,
      state,
      ethnicity,
      disease,
    });

    models.Info.findOne({
      gender,
      state,
      ethnicity,
      disease,
    }, (err, info) => {
      if (err) throw err;
      else {
        search.save(err => {
          if(err) throw err;
          else {
            models.Search.find({}, (err, searches) => {
              res.render('data.hbs', {
                layout: false,
                info: info,
                searches: searches,
              });
            });
          }
        });
      }
    });
});

app.get('/links', function(req, res) {
  console.log('getting links');
  models.Site.find({},
    (err, sites) => {
      console.log('err', err);
      console.log('sites', sites);
      res.render('add.hbs', { layout:false, sites:sites });
    });
});

app.post('/link', (req, res) => {
    const url = req.body.url;
    const newSite = new models.Site({ url });

    newSite.save((err, site) => {
      if(err) throw err;
      else {
        console.log('The site is', site);
        res.redirect('/links');
      }
    });
});

app.get('/summary', function(req, res) {
  /*
  models.Search.find({}, function(err, count, searches) {
    console.log('these are all the users', searches);
    let totalAge = searches.reduce(function(prev,cur){
        return prev.age += cur.age;
    },0);
    const averageAge = totalAge/count;
    res.render('summary.hbs', {layout:false, averageAge: averageAge, maleCount: 10, femaleCount: 12});
  });*/
  models.Search.find({}, (err, searches) => {
    let females = searches.filter(function(ele){
      return ele.gender === 'F';
    });
    let males = searches.filter(function(ele){
      return ele.gender === 'M';
    });
    let latinoEthnicity = searches.filter(function(ele){
      return ele.ethnicity === 'Latino/Hispanic'
    });
    let caucasianEthnicity = searches.filter(function(ele){
      return ele.ethnicity === 'Caucasian'
    });
    let asianEthnicity = searches.filter(function(ele){
      return ele.ethnicity === 'Asian'
    });
    let africanEthnicity = searches.filter(function(ele){
      return ele.ethnicity === 'African American'
    });
    res.render('summary.hbs', {
      layout: false,
      femaleCount: females.length,
      maleCount: males.length,
      latinoCount: latinoEthnicity.length,
      asianCount: asianEthnicity.length,
      africanCount: africanEthnicity.length,
      caucasianCount: caucasianEthnicity.length,
    });
  });
});

//Used from Authentication slides
app.get('/registration', function(req, res) {
  res.render('registration.hbs', {layout:false});
});

app.post('/register', function(req, res) {
  User.register(new User({username:req.body.username}),
      req.body.password, function(err, user){
    if (err) {
      res.render('registration.hbs', {message:'Your registration information is not valid', layout:false});
    } else {
      passport.authenticate('local')(req, res, function() {
        res.render('registration.hbs', {"message":"Congrats! Your registration is complete! Please enter your information into the log-in field.", layout:false});
      });
    }
  });
});

app.post('/login', function(req,res,next) {
  passport.authenticate('local', function(err,user) {
    if(user) {
      req.logIn(user, function(err) {
        res.render('layout.hbs');
      });
    } else {
      res.render('registration.hbs', {message:'Your login or password is incorrect.', layout:false});
    }
  })(req, res, next);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
