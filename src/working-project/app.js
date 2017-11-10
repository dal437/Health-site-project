const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const models = require('./db');

// enable sessions
const sessionOptions = {
    secret: 'secretWord',
    saveUninitialized: false,
    resave: false,
};


app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(sessionOptions));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
