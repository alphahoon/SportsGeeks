const mongoose = require('mongoose');

var trendsSchema = new mongoose.Schema({
    name: String,
    trendsVal: Number,
    rank: Number,
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('trends', trendsSchema);
