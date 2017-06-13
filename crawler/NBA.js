var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var request = require('request');
var cheerio = require('cheerio');
var moment = require('moment');
var async = require('async');
var fs = require('fs');
var timestamp = Date.now();
var dates = [];
var team1s = [];
var team2s = [];
var times = [];
var scores = [];
var objArr = [];
var funArr = [];
var a = 0;
for(var i = 0; i < 6; i++){
  funArr[funArr.length] = function(){
    var x = i+1;
    request("http://sports.news.naver.com/basketball/schedule/index.nhn?date=20170610&month=0"+x+"&year=2017&teamCode=&category=nba", function(error, response, body) {
      if(error) {
        console.log("Error: " + error);
      }
      console.log("Status code: " + response.statusCode);

      var $ = cheerio.load(body);

      var search = $('td');
      search.each(function(index){
        dates.push($(this).find('span.td_date').text());
        team1s.push($(this).find('span.team_lft').text().trim());
        team2s.push($(this).find('span.team_rgt').text().trim());
        times.push($(this).find('span.td_hour').text().trim())
        scores.push($(this).find('strong.td_score').text().trim());
      });
      console.log(dates);
      console.log(team1s);
      console.log(team2s);
      console.log(times);
      console.log(scores);
      var tempdate = ''
      var temptime = ''
      for(i=0; i<dates.length; i++){

        if(dates[i]!=''){
          tempdate = dates[i];
        }
        if(times[i]!=''){
          temptime = times[i];
        }
        if(team1s[i]!=''){
          var score1 = ''
          var score2 = ''
          if((scores[i] != "VS")&&(scores[i] != '')){
            var scoretemp = scores[i].split(':')
            score1 = scoretemp[0]
            score2 = scoretemp[1]
          }
          else{
            score1 = null
            score2 = null
          }
          var t1 = ''
          var t2 = ''
          switch(team1s[i]){
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
          switch(team2s[i]){
            case '보스턴':
              t2 = 'BostonCeltics';
              break;
            case '브루클린':
              t2 = 'BrooklynNets';
              break;
            case '뉴욕':
              t2 = 'NYKnicks';
              break;
            case '필라델피아':
              t2 = 'Philadelphia76';
              break;
            case '토론토':
              t2 = 'TorontoRaptors';
              break;
            case '시카고':
              t2 = 'ClevelandCavaliers';
              break;
            case '디트로이트':
              t2 = 'DetroitPistons';
              break;
            case '인디애나':
              t2 = 'IndianaPacers';
              break;
            case '밀워키':
              t2 = 'MilwaukeeBucks';
              break;
            case '애틀랜타':
              t2 = 'AtlantaHawks';
              break;
            case '샬럿':
              t2 = 'CharlotteHornets';
              break;
            case '마이애미':
              t2 = 'MiamiHeat';
              break;
            case '올랜도':
              t2 = 'OrlandoMagic';
              break;
            case '워싱턴':
              t2 = 'WashingtonWizards';
              break;
            case '클리블랜드':
              t2 = 'ClevelandCavaliers';
              break;
            case '덴버':
              t2 = 'DenverNuggets';
              break;
            case '미네소타':
              t2 = 'MinnesotaTimberwolves';
              break;
            case '포틀랜드':
              t2 = 'PortlandBlazers';
              break;
            case '오클라호마 시티':
              t2 = 'OklahomaThunder';
              break;
            case '유타':
              t2 = 'UtahJazz';
              break;
            case '골든스테이트':
              t2 = 'GoldenState';
              break;
            case 'LAL':
              t2 = 'LALakers';
              break;
            case 'LAC':
              t2 = 'LAClippers';
              break;
            case '피닉스':
              t2 = 'PhoenixSuns';
              break;
            case '새크라멘토':
              t2 = 'SacramentoKings';
              break;
            case '댈러스':
              t2 = 'DallasMavericks';
              break;
            case '휴스턴':
              t2 = 'HoustonRockets';
              break;
            case '멤피스':
              t2 = 'MemphisGrizzlies';
              break;
            case '뉴올리언즈':
              t2 = 'NewOrleansPelicans';
              break;
            case '샌안토니오':
              t2 = 'SanAntonioSpurs';
              break;
          }
          objArr.push({
            sport: "Basketball",
            league: "NBA",
            teamA: t1,
            teamB: t2,
            done: true, // Default: "false"
            scoreA: score1, // Default: "N/A"
            scoreB: score2, // Default: "N/A"
            datetime: moment('2017.'+tempdate.substring(0,4)+' '+temptime, 'YYYY.MM.DD h:mm').utcOffset(0).format(),
            update: moment().utcOffset(0).format()
          });
        }
      }
      a++;
      if(a==6){
        console.log('Storing schedules into mongodb');

        const monk = require('monk')
        const url = 'localhost:27017/main';
        const db = monk(url);

        db.then(() => {
            console.log('Connected correctly to server');
        });

        const collection = db.get('schedules');
        console.log(objArr);
        collection.remove();
        for(i=0; i<objArr.length; i++){
          collection.insert(objArr[i])
          .catch((err) => {
              console.log('Error while adding league keywords.');
          })
          .then(() => db.close());
        }
      }
    })
  }
}
function doit(){
  for(i=0; i<6; i++){
    funArr[i]();
  }
}
doit();
