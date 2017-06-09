var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleSchema = new Schema({
  sport: {
      id: String,
      type: String,
      name: {
          en: String,
          kr: String
      },
      img: String
  },
  league: {
      id: String,
      type: String,
      country: {
          en: String,
          kr: String,
          img: String
      },
      name: {
          en: String,
          kr: String
      },
      img: String
  },
  teamA: {
      id: String,
      type: String,
      name: {
          en: String,
          kr: String
      },
      img: String
  },
  teamB: {
      id: String,
      type: String,
      name: {
          en: String,
          kr: String
      },
      img: String
  },
  done: Boolean, // Default: "false"
  scoreA: Number, // Default: "N/A"
  scoreB: Number, // Default: "N/A"
  datetime: String,
  update: String

});

module.exports = mongoose.model('schedule', scheduleSchema);
