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
  request("http://sports.news.naver.com/kfootball/record/index.nhn?category=kleague2", function(error, response, body) {
    console.log('request is '+"http://sports.news.naver.com/kfootball/record/index.nhn?category=kleague2");
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
        case '대전':
          t1 = 'DaejeonCitizen';
          break;
        case '수원FC':
          t1 = 'SuwonFC'
          break;
        case '성남':
          t1 = 'SeongnamFC'
          break;
        case '아산':
          t1 = 'AsanMugunghwa'
          break;
        case '안산':
          t1 = 'AnsanGreeners'
          break;
        case '서울E':
          t1 = 'SeoulEland'
          break;
        case '경남':
          t1 = 'GyeongnamFC'
          break;
        case '부산':
          t1 = 'BusanIPark'
          break;
        case '안양':
          t1 = 'FCAnyang'
          break;
        case '부천':
          t1 = 'BuchoenFC'
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
      division: "Challenge",
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
