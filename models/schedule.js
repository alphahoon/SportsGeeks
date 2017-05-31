var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleSchema = new Schema({
    leagueName: String,
    team1Name: String,
    team2Name: String,
    team1score: Number,
    team2score: Number,
    date: String,
    time: String
});

module.exports = mongoose.model('schedule', scheduleSchema);
