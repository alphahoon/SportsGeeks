function News_Naver(keyword, callback) {
    console.log('(News_Naver)Begin of crawling ' + keyword);

    var request = require('request');
    var cheerio = require('cheerio');
    var Iconv = require('iconv').Iconv;
    var JH_Conv = require('./converter/JHConv');
    var moment = require('moment');

    var URL_time = "http://news.naver.com/main/search/search.nhn?so=datetime.dsc&rcsection=exist%3A107&query=";
    var src = "Naver";
    var Time_Type = ['seconds', 'minutes', 'hours', 'days', 'months', 'years'];
    var Time_Type_Kor = ['초', '분', '시간', '일', '달', '년'];

    var option = {
        url: URL_time + JH_Conv(keyword),
        encoding: null,
        timeout: 10000
    };

    var returnArray = new Array();

	request.get(option, function(error, response, body) {
		if(error) {
			console.log("(News_Naver)Error: " + error);
            callback(new Array());
        }
		else {
    		console.log("(News_Naver)Status code: " + response.statusCode);

            iconv = new Iconv('euc-kr', 'utf-8//translit//ignore');
            var $ = cheerio.load(iconv.convert(body).toString());
            var itemProcessed = 0;
            var itemNumber = $('ul.srch_lst > li > div.ct').length;

            $('ul.srch_lst > li > div.ct').each(function(index) {
                var title = $(this).find('a.tit').text().trim();
                var summary = $(this).find('p.dsc').text().trim();
                var timeString = $(this).find('div.info > span.time').text().trim();
                var url = $(this).find('a.tit').attr('href').trim();  

                var timeTypeIndex = 0;
                var time = "";

                if (summary.length > 40) {
                    summary = summary.substring(0, 40);
                }

                for(var i = 0; i < Time_Type_Kor.length; i++) {
                    var timeIndex = timeString.indexOf(Time_Type_Kor[i]);

                    if(timeIndex != -1) {
                        if(i == 0) {
                            timeString = 0;
                        }
                        else {
                            timeString = timeString.substring(0, timeIndex);
                            time = moment().add(-1 * timeString, Time_Type[i]);
                        }

                        break;
                    }
                }

                if (time == "") {
                    if(!(/^[0-9.]$/.test(timeString))) {
                        time = moment();
                    }
                    else {
                        time = moment(timeString.replace(/./g, '-'));
                    }
                }

                time = time.utcOffset(0).add(-9, 'h').format();

                returnArray[index] = {
                    "src": src,
                    "title": title,
                    "summary": summary,
                    "posted": time,
                    "url": url
                }

                itemProcessed++;
                //console.log('(Processing) ' + itemProcessed + " of " + itemNumber);

                if(itemProcessed == itemNumber) {
                    //console.log("(Processing)Done!");
                    console.log("(News_Naver)End of crawling " + keyword);
                    callback(returnArray);
                }
            });
        }
    });
}

module.exports = News_Naver;
