var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var request = require('request');
var cheerio = require('cheerio');
var Iconv = require('iconv').Iconv;

var URL_time = "http://news.naver.com/main/search/search.nhn?&so=datetime.dsc&rcsection=exist%3A107&query=";
var src = "Naver";

function Crawl_Naver(keyword) {
    var option = {
        url: URL_time + keyword,
        encoding: null
    };

	request.get(option, function(error, response, body) {
		if(error) {
			console.log("Error: " + error);
		}
		//console.log("Status code: " + response.statusCode);
        console.log("request success!");
        iconv = new Iconv('euc-kr', 'utf-8//translit//ignore');
        var $ = cheerio.load(iconv.convert(body).toString());

        $('div.ct').each(function(index) {
            //var title_a = $(this).find('div.ct > a.tit');
            var title = $(this).find('a.tit').text().trim();
            //var url = title_a.attr('href').trim();
            var summary = $(this).find('p.dsc').text().trim();
            var url = $(this).find('a.tit').attr('href').trim();

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
//var key = "맨체스터 유나이티드";
//console.log(encodeURI(key, "euc-kr"));
//console.log(encodeURI(decodeURI(key, "euc-kr")));
//Crawl_Naver(encodeURI(encodeURIComponent(key)));
mongoose.connect('mongodb://localhost:27017/main');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Successfully connect mongoose!");

    console.log(db);

    db.close();
});
