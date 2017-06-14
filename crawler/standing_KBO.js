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
      case '두산':
        t1 = 'Doosan';
        break;
      case 'NC':
        t1 = 'NC';
        break;
      case '넥센':
        t1 = 'Nexen';
        break;
      case 'LG':
        t1 = 'LG';
        break;
      case 'KIA':
        t1 = 'KIA';
        break;
      case 'SK':
        t1 = 'SK';
        break;
      case '한화':
        t1 = 'Hanhwa';
        break;
      case '롯데':
        t1 = 'Lotte';
        break;
      case '삼성':
        t1 = 'Samsung';
        break;
      case 'kt':
        t1 = 'KT';
        break;
    }
    return t1;
  }

  request("http://sports.news.naver.com/kbaseball/record/index.nhn?category=kbo", function(error, response, body) {
    console.log('request is '+"http://sports.news.naver.com/kbaseball/record/index.nhn?category=kbo");
    if(error) {
      console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);
    $('tbody').each(function(index){
      temp.push(($(this).text()));
    })
    var temp1 = temp[0].split('\n')
    for(i=0;i<temp1.length;i++){
      if(temp1[i].trim()!=''){
        statistics.push(temp1[i].trim())
      }
    }
    objArr = [];
    for(j=0;j<statistics.length/12;j++){
      objArr.push({
        team: teamdb(statistics[12*j+1]),
        rank: statistics[12*j],
        matches: statistics[12*j+2],
        wins: statistics[12*j+3],
        draws: statistics[12*j+5],
        losses: statistics[12*j+4],
        winrate: Math.round((Number(statistics[12*j+3])/Number(statistics[12*j+2]))*100)+"%"
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
      sport: "Baseball",
      league: "KBO",
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
