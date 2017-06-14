function News_Yahoo(keyword, callback) {
    console.log("(News_Yahoo)Begin of crawling " + keyword);

    var request = require('request');
    var cheerio = require('cheerio');
    var moment = require('moment');

    var URL_query = "https://news.search.yahoo.com/search?p=";
    var src = "Yahoo";
    var Time_Type = ['second', 'minute', 'hour', 'day', 'month', 'year'];
    var returnArray = new Array();

	request(URL_query + keyword.replace(/ /gi, '+'), function(error, response, body) {
		if(error) {
			console.log("(News_Yahoo)Error: " + error);
            callback(new Array());
		}
        else if(response.statusCode == 999) {
            console.log("(News_Yahoo)Status code 999 occurs");
            callback(new Array());
        }
        else {
            console.log("(News_Yahoo)Status code: " + response.statusCode);
               
            var $ = cheerio.load(body);
            var itemProcessed = 0;
            var itemNumber = $('div.NewsArticle > div.layoutCenter').length;

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
                            time = moment().add(-1 * timeString, Time_Type[i] + 's');
                        }

                        break;
                    }
                }

                if (time == "") {
                    if(timeString.trim() == 'moments ago') {
                        time = moment();
                    }
                    else {
                        time = moment(timeString.replace('.', '-'));
                    }
                }

                time = time.utcOffset(0).add(8, 'h').format();

                returnArray[index] = {
                    "src": src,
                    "title": title,
                    "summary": summary,
                    "posted": time,
                    "url": url
                }

                itemProcessed++;
                //console.log('(Processing) ' + itemProcessed + ' of ' + itemNumber);

                if(itemProcessed == itemNumber) {
                    //console.log('(Processing)Done!'); 
                    console.log("(News_Yahoo)End of crawling " + keyword);
                    callback(returnArray);
                }
            });
        }
    });
}

module.exports = News_Yahoo;
