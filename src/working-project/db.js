// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/myapp';


// my schema goes here!
const InfoSchema = new Schema({
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    state: {type: String, required: true},
    ethnicity: {type: String, required: true},
});

// list of sites for user to access
const Listofsites = new mongoose.Schema({
  sites: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
});

const Info = mongoose.model('Info', InfoSchema);
const List = mongoose.model('List', Listofsites);

mongoose.connect(MONGO_URI);

module.exports = {
    Info,
    List,
};
