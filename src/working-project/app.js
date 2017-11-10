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

app.get('/', (req, res) => {
  res.render('layout.hbs');
});

app.post('/', (req, res) => {
  res.render('layout.hbs');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
