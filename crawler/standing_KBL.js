function crawl(){
  var request = require('request');
  var cheerio = require('cheerio');
  var moment = require('moment');
  var async = require('async');
  var fs = require('fs');
  var timestamp = Date.now();
  var teams = [];
  var statistics = [];
  var objArr = [];
  var temp = [];
  var statistics = [];

  function teamdb(team){
    t1 = ''
    switch(team){
      case '원주동부':
        t1 = 'WonjuDongbu';
        break;
      case '울산모비스':
        t1 = 'UlsanMobis';
        break;
      case '서울삼성':
        t1 = 'SeoulSamsung';
        break;
      case '서울SK':
        t1 = 'SeoulSK';
        break;
      case '창원LG':
        t1 = 'ChangwonLG';
        break;
      case '고양오리온':
        t1 = 'GoyangOrion';
        break;
      case '인천전자랜드':
        t1 = 'IncheonET';
        break;
      case '전주KCC':
        t1 = 'JeonjuKCC';
        break;
      case '안양KGC':
        t1 = 'AnyangKGC';
        break;
      case '부산KT':
        t1 = 'BusanKT';
        break;
    }
    return t1;
  }

  request("http://sports.news.naver.com/basketball/record/index.nhn?category=kbl", function(error, response, body) {
    console.log('request is '+"http://sports.news.naver.com/basketball/record/index.nhn?category=kbl");
    if(error) {
      console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);
    $('tbody').each(function(index){
      temp.push(($(this).text()));
    })
    var temp1 = temp[1].split('\n')
    for(i=0;i<temp1.length;i++){
      if(temp1[i].trim()!=''){
        statistics.push(temp1[i].trim())
      }
    }
    console.log(statistics)

    objArr = [];
    for(j=0;j<statistics.length/15;j++){
      objArr.push({
        team: teamdb(statistics[15*j+1]),
        rank: statistics[15*j],
        matches: statistics[15*j+2],
        wins: statistics[15*j+4],
        draws: 0,
        losses: statistics[15*j+5],
        winrate: Math.round((Number(statistics[15*j+4])/Number(statistics[15*j+2]))*100)+"%"
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
      sport: "Basketball",
      league: "KBL",
      standings: objArr,
      update: moment().utcOffset(0).format()
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
