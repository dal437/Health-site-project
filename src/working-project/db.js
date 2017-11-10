// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MONGO_URI = process.env.MONGODB_URI;


// my schema goes here!
const InfoSchema = new Schema({
    age: Number,
    gender: String,
    date: Number,
    cancer: String
});

// list of sites for user to access
const Listofsites = new mongoose.Schema({
  sites: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
});

mongoose.connect(MONGO_URI);
