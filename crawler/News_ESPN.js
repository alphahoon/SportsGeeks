function News_ESPN(keyword, callback) {
    var request = require('request');
    var cheerio = require('cheerio');
    var moment = require('moment');

    var URL_query = "http://search.espn.com/results?dims=5&dateFilter=GO&searchString=";
    var src = "ESPN";
    var returnArray = new Array();

    request(URL_query + keyword, function(error, response, body) {
		if(error) {
			console.log("(News_ESPN)Error: " + error);
		}
		console.log("(News_EPSN)Status code: " + response.statusCode);
      
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

            returnArray[index] = {
                "src": src,
                "title": title,
                "summary": summary,
                "posted": time,
                "url": url
            }
            //console.log(src);
            //console.log(title);
            //console.log(summary);
            //console.log(time);
            //console.log(url);
	    });

        callback(returnArray);

        console.log("(News_ESPN.js)end of callback");
    });

    console.log("(News_ESPN.js)end of program");
}

module.exports = News_ESPN;
