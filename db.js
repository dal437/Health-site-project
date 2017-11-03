// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// my schema goes here!
const InfoSchema = new Schema({
    age: Number,
    gender: String
    date: Number,
    typeofcancer: String
});

// list of sites for user to access 
const Listofsites = new mongoose.Schema({
  sites: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
});
