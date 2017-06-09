var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var request = require('request');
var cheerio = require('cheerio');
var async = require('async');
var fs = require('fs');
var timestamp = Date.now();

request("http://sports.news.naver.com/wbaseball/schedule/index.nhn?category=mlb&year=2017&month=06", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  var temp = [];
  $('script').each(function(index){
	  temp.push($(this).text());
  });
  for(i=0; i<temp.length; i++){
    if(temp[i].indexOf('monthlyScheduleModel')!=-1){
      var temp1 = temp[i].split('monthlyScheduleModel: ')[1].split('seasonList:')[0];
      var temp2 = temp1.substring(0,temp1.length-4);
      var temp3 = JSON.parse(temp2);
      //fs.appendFileSync('hackernews.txt', JSON.stringify(temp3.dailyScheduleListMap));
      for (j=0; j<temp3.dailyScheduleListMap['20170601'].length; j++){
        console.log(temp3.dailyScheduleListMap['20170601'][j].homeTeamName)
      }
    }
  }
});
