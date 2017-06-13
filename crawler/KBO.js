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
    request("http://sports.news.naver.com/kbaseball/schedule/index.nhn?date=20170613&month=0"+x+"&year=2017&teamCode=", function(error, response, body) {
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
          switch(team2s[i]){
            case '두산':
              t2 = 'Doosan';
              break;
            case 'NC':
              t2 = 'NC';
              break;
            case '넥센':
              t2 = 'Nexen';
              break;
            case 'LG':
              t2 = 'LG';
              break;
            case 'KIA':
              t2 = 'KIA';
              break;
            case 'SK':
              t2 = 'SK';
              break;
            case '한화':
              t2 = 'Hanhwa';
              break;
            case '롯데':
              t2 = 'Lotte';
              break;
            case '삼성':
              t2 = 'Samsung';
              break;
            case 'kt':
              t2 = 'KT';
              break;
          }
          objArr.push({
            sport: "Basketball",
            league: "KBO",
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
