// db.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/myapp';
const passportLocalMongoose = require('passport-local-mongoose')

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

const SiteSchema = new Schema({
	url: {type: String, required: true}
});

const UserSchema = new mongoose.Schema({ });

UserSchema.plugin(passportLocalMongoose);
let User = mongoose.model('User', UserSchema);
const Info = mongoose.model('Info', InfoSchema);
const Site = mongoose.model('Site', SiteSchema);
const Search = mongoose.model('Search', SearchSchema);

mongoose.connect(MONGO_URI);

module.exports = {
    Info,
    Site,
    Search,
};
