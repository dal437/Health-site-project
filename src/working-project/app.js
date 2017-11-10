//app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const models = require('./db');

// Server constants
const sessionOptions = {
    secret: 'secretWord',
    saveUninitialized: false,
    resave: false,
};

// Configure appi
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(sessionOptions));
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.get('/working-project', (req, res) => {
    const d = req.query.director;
    const q = {};
    if (d) {
        q.director = d;
    }
    models.Movie.find(q,
        (err, movies) => res.render('layout.hbs', { movies }));
});

app.get('/working-project/add', (_, res) => res.render('add.hbs'));
app.post('/working-project/add', (req, res) => {
    const title = req.body.title;
    const year = req.body.year;
    const director = req.body.director;

    const movie = new models.Movie({ title, year, director });
    if (req.session.addedMovies) {
        req.session.addedMovies.push(movie.toObject());
    }
    else {
      req.session.addedMovies = [movie.toObject()];
    }
    movie.save(() => res.redirect('/working-project'));
});

app.get('/about', (req, res) =>
    res.render('about.hbs', { movies: req.session.addedMovies }));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
