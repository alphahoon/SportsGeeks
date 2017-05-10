var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleSchema = new Schema({
    leagueName: String,
    teamName: String,
    team1score: Number,
    team2score: Number,
    match_date: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('schedule', scheduleSchema);
