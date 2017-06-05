const mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
    keyword: [String],
    team: {
    	id: String,
    	type: String,
    	name: {
    		en: String,
    		kr: String
    	},
    	alias: {
    		en: String,
    		kr: String
    	},
    	img: String
    },
    articles: [{
    	src: String,
    	title: String,
    	summary: String, //Should be less than 40 characters.
    	posted: String,
    	url: String
    }]
});

module.exports = mongoose.model('news', newsSchema);
