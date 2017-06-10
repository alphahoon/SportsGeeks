function News_Naver(keyword) {
    var request = require('request');
    var cheerio = require('cheerio');
    var Iconv = require('iconv').Iconv;
    var JH_Conv = require('./converter/JHConv');
    var moment = require('moment');

    var URL_time = "http://news.naver.com/main/search/search.nhn?so=datetime.dsc&rcsection=exist%3A107&query=";
    var src = "Naver";
    var Time_Type = ['seconds', 'minutes', 'hours', 'days', 'months', 'years'];
    var Time_Type_Kor = ['초', '분', '시간', '일', '달', '년'];

    keyword = JH_Conv(keyword);

    var option = {
        url: URL_time + keyword,
        encoding: null
    };

    console.log('ready for request');
	request.get(option, function(error, response, body) {
		if(error) {
			console.log("Error: " + error);
		}
		//console.log("Status code: " + response.statusCode);
        console.log("request success!");
        iconv = new Iconv('euc-kr', 'utf-8//translit//ignore');
        var $ = cheerio.load(iconv.convert(body).toString());

        $('ul.srch_lst > li > div.ct').each(function(index) {
            var title = $(this).find('a.tit').text().trim();
            var summary = $(this).find('p.dsc').text().trim();
            var timeString = $(this).find('div.info > span.time').text().trim();
            var url = $(this).find('a.tit').attr('href').trim();

            console.log("Every information gathering is done.");

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
                        time = moment().add(-1 * timeString, Time_Type[i]).utcOffset(0).toISOString();
                    }

                    break;
                }
            }

            if (time == "") {
                time = moment(timeString.replace('.', '-') + ' 21:00:00.000').utcOffset(0).toISOString();
            }

            console.log(src)
            console.log(title);
            console.log(summary);
            console.log(time);
            console.log(url);

	    });
    });
}

module.exports = News_Naver;