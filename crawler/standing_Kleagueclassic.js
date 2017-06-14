function crawl(){
  var request = require('request');
  var cheerio = require('cheerio');
  var moment = require('moment');
  var async = require('async');
  var fs = require('fs');
  var timestamp = Date.now();
  var teams = [];
  var temp = [];
  var objArr = [];
  var statistics = [];
  request("http://sports.news.naver.com/kfootball/record/index.nhn?category=kleague", function(error, response, body) {
    console.log('request is '+"http://sports.news.naver.com/kfootball/record/index.nhn?category=kleague");
    if(error) {
      console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);
    $('tbody#regularGroup_table').each(function(index){
      temp = ($(this).text().split('\n\t\t\t\t\t'));
    })
    for(i=0;i<temp.length;i++){
      if(temp[i].trim()!=''){
        statistics.push(temp[i].trim())
      }
    }
    for(i=0;i<statistics.length/12;i++){
      var t1 = ''
      switch(statistics[12*i+1]){
        case '수원':
          t1 = 'SuwonBluewings';
          break;
        case '포항':
          t1 = 'PohangSteelers'
          break;
        case '울산':
          t1 = 'UlsanFC'
          break;
        case '전남':
          t1 = 'JeonnamFC'
          break;
        case '전북':
          t1 = 'JeonbukFC'
          break;
        case '대구':
          t1 = 'DaeguFC'
          break;
        case '광주':
          t1 = 'GwangjuFC'
          break;
        case '서울':
          t1 = 'FCSeoul'
          break;
        case '강원':
          t1 = 'GangwonFC'
          break;
        case '제주':
          t1 = 'JejuUtd'
          break;
        case '인천':
          t1 = 'IncheonUtd'
          break;
        case '상주':
          t1 = 'SangjuFC'
        }
      objArr.push({
        team: t1,
        rank: statistics[12*i],
        matches: statistics[12*i+2],
        wins: statistics[12*i+4],
        draws: statistics[12*i+5],
        losses: statistics[12*i+6],
        winrate: Math.round((Number(statistics[12*i+4])/Number(statistics[12*i+2]))*100)+"%"
      });
    }
    console.log('Storing schedules into mongodb');
    const monk = require('monk')
    const url = 'localhost:27017/main';
    const db = monk(url);

    db.then(() => {
        console.log('Connected correctly to server');
    });

    const collection = db.get('standings');
    //collection.remove();
    var standing = {
      sport: "Soccer",
      league: "KLeague",
      division: "Classic",
      standings: objArr
    }
    console.log(standing)
    collection.insert(standing)
    .catch((err) => {
        console.log('Error while adding league keywords.');
    })
    .then(() => db.close());
  });
}
module.exports = crawl
