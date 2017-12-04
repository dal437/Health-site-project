// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/myapp';

// my schema goes here!
const InfoSchema = new Schema({
    // age: {type: Number, required: true},
    gender: {type: String, required: true},
    state: {type: String, required: true},
    ethnicity: {type: String, required: true},
    disease: {type: String, required: true},
    info: {type: String, required: true},
});

const SearchSchema = new Schema({
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    state: {type: String, required: true},
    ethnicity: {type: String, required: true},
    disease: {type: String, required: true},
},{ timestamps: true });

// list of sites for user to access
/* const Listofsites = new mongoose.Schema({
  sites: {type: String},
});*/

const SiteSchema = new Schema({
	url: {type: String, required: true}
});

const Info = mongoose.model('Info', InfoSchema);
const Site = mongoose.model('Site', SiteSchema);
const Search = mongoose.model('Search', SearchSchema);

mongoose.connect(MONGO_URI);

module.exports = {
    Info,
    Site,
    Search,
};
