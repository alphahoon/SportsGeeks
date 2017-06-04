var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var request = require('request');
var cheerio = require('cheerio');
var async = require('async');
var fs = require('fs');

var URL = "http://news.naver.com/main/search/search.nhn?&so=datetime.dsc&rcsection=exist%3A107&query="



mongoose.connect('mongodb://localhost:27017/main');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	keyword = []
	// for team in teams {
	// 	en_fullname = team.name.en;
	// 	en_alias = team.alias.en;
	// 	kr_fullname = team.name.kr;
	// 	kr_alias = team.alias.kr;
	// }
	request(URL + 'Manchester United FC', function(error, response, body) {
		if(error) {
			console.log("Error: " + error);
		}
		console.log("Status code: " + response.statusCode);
	});
});
