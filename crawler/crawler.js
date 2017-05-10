var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("http://www.kleague.com/ko/content/%EA%B2%BD%EA%B8%B0%EC%9D%BC%EC%A0%95", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  $('div.schedule_month_table01.sch_play_prev_table').each(function( index ) {
	  var date = $(this).find('span.schedule_month_number').text();
	  $('tr.division').each(function(index){
		  var team1 = $(this).find('span.name').text();
		  var time = $(this).find('span.time').text();
		  console.log(team1);
		  console.log(time);
		  fs.appendFileSync('kleague.txt', team1 + time);
	  });
  });

});
