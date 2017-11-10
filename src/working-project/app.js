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

const medicalConditions = [{name: "Asthma",
state: "TX",
count: "45",
description: "Difficulty breathing"}];

app.get('/', (req, res) => {
  let c = conditions;
  const f = req.query.filterdisease;
  if (f){
    x = x.filter(condition => condition.description === f);
  }
	res.render('layout.hbs', {medicalConditions:x});
});


app.post('/', (req, res) => {
	const medicalName = req.body.Name;
  const medicalState = req.body.State;
  const medicalCount = req.body.Count;
  const medicalDescription = req.body.Description;
  medicalConditions.push({name:medicalName, state:medicalState, count:medicalCount, description: medicalDescription});
	res.redirect('/');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
