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
      case '볼티모어':
        t1='Orioles';
        break;
      case '보스턴':
        t1='RedSox';
        break;
      case '뉴욕Y':
        t1='Yankees';
        break;
      case '탬파베이':
        t1='Rays';
        break;
      case '토론토':
        t1='BlueJays';
        break;
      case '시카고W':
        t1='WhiteSox';
        break;
      case '클리블랜드':
        t1='Cleveland';
        break;
      case '디트로이트':
        t1='Detroit';
        break;
      case '캔자스시티':
        t1='KansasCity';
        break;
      case '미네소타':
        t1='Twins';
        break;
      case '휴스턴':
        t1='Houston';
        break;
      case 'LAA':
        t1='Angels';
        break;
      case '오클랜드':
        t1='Oakland';
        break;
      case '시애틀':
        t1='Mariners';
        break;
      case '텍사스':
        t1='Rangers';
        break;
      case '애틀랜타':
        t1='Braves';
        break;
      case '마이애미':
        t1='Marlins';
        break;
      case '뉴욕M':
        t1='Mets';
        break;
      case '필라델피아':
        t1='Phillies';
        break;
      case '워싱턴':
        t1='Nationals';
        break;
      case '시카고C':
        t1='Cubs';
        break;
      case '신시내티':
        t1='Cincinnati';
        break;
      case '밀워키':
        t1='Brewers';
        break;
      case '피츠버그':
        t1='Pirates';
        break;
      case '세인트루이스':
        t1='Cardinals';
        break;
      case '애리조나':
        t1='Diamondbacks';
        break;
      case '콜로라도':
        t1='Rockies';
        break;
      case 'LAD':
        t1='Dodgers';
        break;
      case '샌디에이고':
        t1='Padres';
        break;
      case '샌프란시스코':
        t1='Giants';
        break;
    }
    return t1;
  }
  request("http://sports.news.naver.com/wbaseball/record/index.nhn?category=mlb&league=NL&year=2017", function(error, response, body) {
    console.log('request is '+"http://sports.news.naver.com/wbaseball/record/index.nhn?category=mlb&league=NL&year=2017");
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
        var temp3 = JSON.parse(temp2);
      }
    }
    var wcArr = [];
    for(j=0;j<temp3.wildCardTeamRecordList.length;j++){
      wcArr.push({
        team: teamdb(temp3.wildCardTeamRecordList[j].teamName),
        rank: temp3.wildCardTeamRecordList[j].rank,
        matches: temp3.wildCardTeamRecordList[j].gameCount,
        wins: temp3.wildCardTeamRecordList[j].won,
        draws: 0,
        losses: temp3.wildCardTeamRecordList[j].lost,
        winrate: Math.round((Number(temp3.wildCardTeamRecordList[j].won)/Number(temp3.wildCardTeamRecordList[j].gameCount))*100)+"%"
      })
    }

    console.log(wcArr);
    var westArr = [];
    for(j=0;j<temp3.westDivisionTeamRecordList.length;j++){
      westArr.push({
        team: teamdb(temp3.westDivisionTeamRecordList[j].teamName),
        rank: temp3.westDivisionTeamRecordList[j].rank,
        matches: temp3.westDivisionTeamRecordList[j].gameCount,
        wins: temp3.westDivisionTeamRecordList[j].won,
        draws: 0,
        losses: temp3.westDivisionTeamRecordList[j].lost,
        winrate: Math.round((Number(temp3.westDivisionTeamRecordList[j].won)/Number(temp3.westDivisionTeamRecordList[j].gameCount))*100)+"%"
      })
    }
    console.log(westArr);

    var eastArr = [];
    for(j=0;j<temp3.eastDivisionTeamRecordList.length;j++){
      eastArr.push({
        team: teamdb(temp3.eastDivisionTeamRecordList[j].teamName),
        rank: temp3.eastDivisionTeamRecordList[j].rank,
        matches: temp3.eastDivisionTeamRecordList[j].gameCount,
        wins: temp3.eastDivisionTeamRecordList[j].won,
        draws: 0,
        losses: temp3.eastDivisionTeamRecordList[j].lost,
        winrate: Math.round((Number(temp3.eastDivisionTeamRecordList[j].won)/Number(temp3.eastDivisionTeamRecordList[j].gameCount))*100)+"%"
      })
    }
    console.log(eastArr);

    var centerArr = [];
    for(j=0;j<temp3.centerDivisionTeamRecordList.length;j++){
      centerArr.push({
        team: teamdb(temp3.centerDivisionTeamRecordList[j].teamName),
        rank: temp3.centerDivisionTeamRecordList[j].rank,
        matches: temp3.centerDivisionTeamRecordList[j].gameCount,
        wins: temp3.centerDivisionTeamRecordList[j].won,
        draws: 0,
        losses: temp3.centerDivisionTeamRecordList[j].lost,
        winrate: Math.round((Number(temp3.centerDivisionTeamRecordList[j].won)/Number(temp3.centerDivisionTeamRecordList[j].gameCount))*100)+"%"
      })
    }
    console.log(centerArr);

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
      league: "MLB",
      division: "National",
      area: "Wildcard",
      standings: wcArr
    }
    var weststanding = {
      sport: "Baseball",
      league: "MLB",
      division: "National",
      area: "West",
      standings: westArr
    }
    var eaststanding = {
      sport: "Baseball",
      league: "MLB",
      division: "National",
      area: "East",
      standings: eastArr
    }
    var centerstanding = {
      sport: "Baseball",
      league: "MLB",
      division: "National",
      area: "Center",
      standings: centerArr
    }
    collection.insert(wcstanding)
    collection.insert(weststanding)
    collection.insert(eaststanding)
    collection.insert(centerstanding)
    .catch((err) => {
        console.log('Error while adding league keywords.');
    })
    .then(() => db.close());
  });
}
module.exports = crawl
