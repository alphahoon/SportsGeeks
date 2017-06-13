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
for(var i = 0; i < 5; i++){
  funArr[funArr.length] = function(){
    var x = i+1;
    request("http://sports.news.naver.com/basketball/schedule/index.nhn?date=20170502&month=0"+x+"&year=2017&teamCode=&category=kbl", function(error, response, body) {
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
          switch(team2s[i]){
            case '원주동부':
              t2 = 'WonjuDongbu';
              break;
            case '울산모비스':
              t2 = 'UlsanMobis';
              break;
            case '서울삼성':
              t2 = 'SeoulSamsung';
              break;
            case '서울SK':
              t2 = 'SeoulSK';
              break;
            case '창원LG':
              t2 = 'ChangwonLG';
              break;
            case '고양오리온':
              t2 = 'GoyangOrion';
              break;
            case '인천전자랜드':
              t2 = 'IncheonET';
              break;
            case '전주KCC':
              t2 = 'JeonjuKCC';
              break;
            case '안양KGC':
              t2 = 'AnyangKGC';
              break;
            case '부산KT':
              t2 = 'BusanKT';
              break;
          }
          objArr.push({
            sport: "Basketball",
            league: "KBL",
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
      if(a==5){
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
  for(i=0; i<5; i++){
    funArr[i]();
  }
}
doit();
