//app.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const models = require('./db');

// enable sessions
const sessionOptions = {
    secret: 'secretWord',
    saveUninitialized: false,
    resave: false,
};

app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(sessionOptions));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/about", (req, res) => {
  res.render('about.hbs', {layout:false});
});

app.get('/', (req, res) => {
  const s = req.query.state;
  const q = {};
  if (s) {
    q.state = s;
  }
  /*let d = diseases;
  const f = req.query.filterGenre;
  if (f){
    b = b.filter(band => band.genre === f);
  }
	res.render('layout.hbs', {bands:b});*/

  res.render('layout.hbs');
});

/* app.get('/data', function(req, res) {
  models.Info.find({},
    (err, infos) => {
      console.log('infos', infos);
      res.render('data.hbs', { layout:false, infos:infos });
    });
});*/

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


const PORT = process.env.PORT || 5000;
app.listen(PORT);
