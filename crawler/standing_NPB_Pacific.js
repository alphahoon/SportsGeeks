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
  function teamdb(team){
    t1 = ''
    switch(team){
      case '요미우리':
        t1 = 'Yomiuri';
        break;
      case '주니치':
        t1 = 'Chunichi';
        break;
      case '한신':
        t1 = 'Hanshin';
        break;
      case '히로시마':
        t1 = 'Hiroshima';
        break;
      case '요코하마':
        t1 = 'Yokohama';
        break;
      case '야쿠르트':
        t1 = 'Tokyo';
        break;
      case '니혼햄':
        t1 = 'Hokkaido';
        break;
      case '소프트뱅크':
        t1 = 'Fukuoka';
        break;
      case '지바롯데':
        t1 = 'Chiba';
        break;
      case '세이부':
        t1 = 'Saitama';
        break;
      case '라쿠텐':
        t1 = 'Tohoku';
        break;
      case '오릭스':
        t1 = 'Orix';
        break;
    }
    return t1;
  }
  request("http://sports.news.naver.com/wbaseball/record/index.nhn?category=npb&league=PL&year=2017", function(error, response, body) {
    console.log('request is '+"http://sports.news.naver.com/wbaseball/record/index.nhn?category=npb&league=PL&year=2017");
    if(error) {
      console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);
    $('script').each(function(index){
      temp.push($(this).text());
    })
    for(i=0; i<temp.length; i++){
      if(temp[i].indexOf('jsonTeamRecord = ')!=-1){
        var temp1 = temp[i].split('jsonTeamRecord = ')[1].split('var teamCount')[0];
        var temp2 = temp1.substring(0,temp1.length-3);
      }
    }
    var temp3 = JSON.parse(temp2);
    var wcArr = [];
    for(j=0;j<temp3.regularTeamRecordList.length;j++){
      wcArr.push({
        team: teamdb(temp3.regularTeamRecordList[j].teamName),
        rank: temp3.regularTeamRecordList[j].rank,
        matches: temp3.regularTeamRecordList[j].gameCount,
        wins: temp3.regularTeamRecordList[j].won,
        draws: temp3.regularTeamRecordList[j].drawn,
        losses: temp3.regularTeamRecordList[j].lost,
        winrate: Math.round((Number(temp3.regularTeamRecordList[j].won)/Number(temp3.regularTeamRecordList[j].gameCount))*100)+"%"
      })
    }
    console.log(wcArr);

    console.log('Storing schedules into mongodb');
    const monk = require('monk')
    const url = 'localhost:27017/main';
    const db = monk(url);

    db.then(() => {
        console.log('Connected correctly to server');
    });

    const collection = db.get('standings');
    //collection.remove();
    var wcstanding = {
      sport: "Baseball",
      league: "NPB",
      division: "Pacific",
      standings: wcArr
    }

    collection.insert(wcstanding)
    .catch((err) => {
        console.log('Error while adding league keywords.');
    })
    .then(() => db.close());
  });
}
module.exports = crawl
