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
      case '보스턴':
        t1 = 'BostonCeltics';
        break;
      case '브루클린':
        t1 = 'BrooklynNets';
        break;
      case '뉴욕':
        t1 = 'NYKnicks';
        break;
      case '필라델피아':
        t1 = 'Philadelphia76';
        break;
      case '토론토':
        t1 = 'TorontoRaptors';
        break;
      case '시카고':
        t1 = 'ClevelandCavaliers';
        break;
      case '디트로이트':
        t1 = 'DetroitPistons';
        break;
      case '인디애나':
        t1 = 'IndianaPacers';
        break;
      case '밀워키':
        t1 = 'MilwaukeeBucks';
        break;
      case '애틀랜타':
        t1 = 'AtlantaHawks';
        break;
      case '샬럿':
        t1 = 'CharlotteHornets';
        break;
      case '마이애미':
        t1 = 'MiamiHeat';
        break;
      case '올랜도':
        t1 = 'OrlandoMagic';
        break;
      case '워싱턴':
        t1 = 'WashingtonWizards';
        break;
      case '클리블랜드':
        t1 = 'ClevelandCavaliers';
        break;
      case '덴버':
        t1 = 'DenverNuggets';
        break;
      case '미네소타':
        t1 = 'MinnesotaTimberwolves';
        break;
      case '포틀랜드':
        t1 = 'PortlandBlazers';
        break;
      case '오클라호마 시티':
        t1 = 'OklahomaThunder';
        break;
      case '유타':
        t1 = 'UtahJazz';
        break;
      case '골든스테이트':
        t1 = 'GoldenState';
        break;
      case 'LAL':
        t1 = 'LALakers';
        break;
      case 'LAC':
        t1 = 'LAClippers';
        break;
      case '피닉스':
        t1 = 'PhoenixSuns';
        break;
      case '새크라멘토':
        t1 = 'SacramentoKings';
        break;
      case '댈러스':
        t1 = 'DallasMavericks';
        break;
      case '휴스턴':
        t1 = 'HoustonRockets';
        break;
      case '멤피스':
        t1 = 'MemphisGrizzlies';
        break;
      case '뉴올리언즈':
        t1 = 'NewOrleansPelicans';
        break;
      case '샌안토니오':
        t1 = 'SanAntonioSpurs';
        break;
    }
    return t1;
  }

  request("http://sports.news.naver.com/basketball/record/index.nhn?category=nba", function(error, response, body) {
    console.log('request is '+"http://sports.news.naver.com/basketball/record/index.nhn?category=nba");
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
        matches: statistics[15*j+3],
        wins: statistics[15*j+4],
        draws: 0,
        losses: statistics[15*j+5],
        winrate: Math.round((Number(statistics[15*j+4])/Number(statistics[15*j+3]))*100)+"%"
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
      league: "NBA",
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
