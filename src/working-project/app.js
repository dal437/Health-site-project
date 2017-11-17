//app.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
//const bootstrap = require('bootstrap');
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

app.get('/links', (req, res) => {
  res.render('add.hbs', {layout:false});
});

app.get("/about", (req, res) => {
  res.render('about.hbs', {layout:false});
});

app.get('/', (req, res) => {
  const s = req.query.state;
  const q = {};
  if (s) {
    q.state = s;
  }
  models.Info.find(q,
    (err, infos) => res.render('layout.hbs', { infos }));
});

app.get('/data', (_, res) => res.render('data.hbs', {layout:false}));
app.post('/data', (req, res) => {
    const age = req.body.age;
    const gender = req.body.gender;
    const state = req.body.state;
    const ethnicity = req.body.ethnicity;

    const infoData = new models.Info({ age, gender, state, ethnicity });
    if (req.session.addedInfo) {
        req.session.addedInfo.push(infoData.toObject());
    }
    else {
      req.session.addedInfo = [infoData.toObject()];
    }
    infoData.save(() => res.redirect('/'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
