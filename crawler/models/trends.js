const mongoose = require('mongoose');

var trendsSchema = new mongoose.Schema({
    id: String,
    name: String,
    trendsVal: Number,
    rank: Number,
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('trends', trendsSchema);
