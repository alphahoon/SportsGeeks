var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var request = require('request');
var cheerio = require('cheerio');
var moment = require('moment');

var URL_query = "http://search.espn.com/results?dims=5&dateFilter=GO&searchString=";
var src = "ESPN";

function Crawl_ESPN(keyword) {
	request(URL_query + keyword, function(error, response, body) {
		if(error) {
			console.log("Error: " + error);
		}
		//console.log("Status code: " + response.statusCode);
        console.log("request success!");
      
        var $ = cheerio.load(body);

        $('li.result').each(function(index) {
            var title = $(this).find('h3 > a').text().trim();
            var summary = $(this).find('div > p').text().trim();
            var timeString = $(this).find('div > span').text().trim();
            var url = $(this).find('h3 > a').attr('href').trim();

            var lastBarIndex = timeString.lastIndexOf('|');
            timeString = timeString.substring(lastBarIndex + 2, timeString.length);

            var time = moment(timeString + ' 21:00:00', 'MMMM DD, YYYY HH:mm:ss').utcOffset(0).toISOString();


            if (summary.length > 40) {
                summary = summary.substring(0, 40);
            }

            console.log(src)
            console.log(title);
            console.log(summary);
            console.log(time);
            console.log(url);
	    });
    });
}

console.log("ready to connect mongoose");
var key = 'Manchester Utd';

Crawl_ESPN(key.replace(/ /gi, '+'));
//mongoose.connect('mongodb://localhost:27017/main');
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function () {
//    console.log("Successfully connect mongoose!");
	//keyword = [];
	// for team in teams {
	// 	en_fullname = team.name.en;
	// 	en_alias = team.alias.en;
	// 	kr_fullname = team.name.kr;
	// 	kr_alias = team.alias.kr;
	// }
//});
