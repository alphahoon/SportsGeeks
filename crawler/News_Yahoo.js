function News_Yahoo(keyword, callback) {
    var request = require('request');
    var cheerio = require('cheerio');
    var moment = require('moment');

    var URL_query = "https://news.search.yahoo.com/search?p=";
    var src = "Yahoo";
    var Time_Type = ['second', 'minute', 'hour', 'day', 'month', 'year'];
    var resultArray = new Array();

	request(URL_query + keyword.replace(/ /gi, '+'), function(error, response, body) {
		if(error) {
			console.log("(News_Yahoo)Error: " + error);
		}
		console.log("(News_Yahoo)Status code: " + response.statusCode);
           
        var $ = cheerio.load(body);

        $('div.NewsArticle > div.layoutCenter').each(function(index) {
            var title = $(this).find('div.compTitle > h3.title > ').text().trim();
            var summary = $(this).find('div.compText > p').text().trim();
            var timeString = $(this).find('div.compTitle > div > span.tri').text().trim();
            var url = $(this).find('div.compTitle > h3.title > ').attr('href').trim();

            var time = "";

            if (summary.length > 40) {
                summary = summary.substring(0, 40);
            }

            for(var i = 0; i < Time_Type.length; i++) {
                var timeIndex = timeString.indexOf(Time_Type[i]);

                if(timeIndex != -1) {
                    if(i == 0) {
                        timeString = 0;
                    }
                    else {
                        timeString = timeString.substring(0, timeIndex).trim();
                        time = moment().add(-1 * timeString, Time_Type[i] + 's').utcOffset(0).toISOString();
                    }

                    break;
                }
            }

            if (time == "") {
                time = moment(timeString.replace('.', '-') + ' 21:00:00.000').utcOffset(0).toISOString();
            }

            //console.log(src)
            //console.log(title);
            //console.log(summary);
            //console.log(time);
            //console.log(url);

            callback(
	    });
    });
}

module.exports = News_Yahoo;
