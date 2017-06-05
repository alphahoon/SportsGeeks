var mongoClient = require('mongodb').MongoClient;
var request = require('request');
var cheerio = require('cheerio');

var URL_query = "https://news.search.yahoo.com/search?p=";
var src = "Yahoo";

function Crawl_Yahoo(keyword) {
	request(URL_query + keyword, function(error, response, body) {
		if(error) {
			console.log("Error: " + error);
		}
		//console.log("Status code: " + response.statusCode);
        console.log("request success!");
      
        var $ = cheerio.load(body);

        $('div.NewsArticle > div.layoutCenter').each(function(index) {
            //var title_a = $(this).find('div.ct > a.tit');
            var title = $(this).find('div.compTitle > h3.title > ').text().trim();
            //var url = title_a.attr('href').trim();
            var summary = $(this).find('div.compText > p').text().trim();
            var url = $(this).find('div.compTitle > h3.title > ').attr('href').trim();

            if (summary.length > 40) {
                summary = summary.substring(0, 40);
            }

            console.log(index)
            console.log(title);
            console.log(summary);
            console.log(url);
	    });
    });
}

console.log("ready to connect mongoose");
var key = 'Manchester Utd';

Crawl_Yahoo(key.replace(/ /gi, '+'));

mongoClient.connect('mongodb://localhost:27017/main', function(err, db) {
    if(err) {
        console.log(err);
        return;
    }

    var teams = 
});
