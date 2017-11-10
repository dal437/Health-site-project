//db.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/myapp';

// my schema goes here!
const MovieSchema = new Schema({
    title: String,
    year: Number,
    director: String,
});

const Movie = mongoose.model('Movie', MovieSchema);

mongoose.connect(MONGO_URI);

module.exports = {
    Movie,
};
