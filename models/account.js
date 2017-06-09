var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    email: String,
    utcOffset: {
        type: Number,
        default: 9
    },
    language: {
        type: String,
        default: "en"
    },
    date: {
        type: Date,
        default: Date.now
    },
    pref: {
        type: Array,
        default: []
    }
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
