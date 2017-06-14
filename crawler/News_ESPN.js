function News_ESPN(keyword, callback) {
    console.log("(News_ESPN)Begin of crawling " + keyword);

    var request = require('request');
    var cheerio = require('cheerio');
    var moment = require('moment');

    var URL_query = "http://search.espn.com/results?dims=5&dateFilter=GO&searchString=";
    var src = "ESPN";
    var returnArray = new Array();

    request(URL_query + keyword.replace(/ /gi, '+'), function(error, response, body) {
		if(error) {
			console.log("(News_ESPN)Error: " + error);
            callback(new Array());
		}
        else {
            console.log("(News_EPSN)Status code: " + response.statusCode);
          
            var $ = cheerio.load(body);
            var itemProcessed = 0;
            var itemNumber = $('li.result').length;

            $('li.result').each(function(index) {
                var title = $(this).find('h3 > a').text().trim();
                var summary = $(this).find('div > p').text().trim();
                var timeString = $(this).find('div > span').text().trim();
                var url = $(this).find('h3 > a').attr('href').trim();

                var lastBarIndex = timeString.lastIndexOf('|');
                timeString = timeString.substring(lastBarIndex + 2, timeString.length);

                var time = moment(timeString, 'MMMM DD, YYYY HH:mm:ss').utcOffset(0).add(8, 'h').format();


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
                
                itemProcessed++;
                //console.log('(Processing) ' + itemProcessed + ' of ' + itemNumber);

                if (itemProcessed == itemNumber) {
                    //console.log('(Processing) Done!');
                    callback(returnArray);
                    console.log("(News_ESPN)End of crawling " + keyword);
                }
            });
        }
    });
}

module.exports = News_ESPN;
