var request = require('request');
var cheerio = require('cheerio');
var moment = require('moment');
var async = require('async');
var fs = require('fs');
var funArr = [];
var count = 0;
var objArr = [];
for(var i = 0; i < 6; i++){
  funArr[funArr.length] = function(){
    var month = i+4;
    request("http://sports.news.naver.com/wbaseball/schedule/index.nhn?category=npb&year=2017&month=0"+month, function(error, response, body) {
      console.log('request is '+"http://sports.news.naver.com/wbaseball/schedule/index.nhn?category=npb&year=2017&month=0"+month)
      if(error) {
        console.log("Error: " + error);
      }
      console.log("Status code: " + response.statusCode);

      var $ = cheerio.load(body);
      var temp = [];
      $('script').each(function(index){
    	  temp.push($(this).text());
      });
      for(i=0; i<temp.length; i++){
        if(temp[i].indexOf('monthlyScheduleModel')!=-1){
          var temp1 = temp[i].split('monthlyScheduleModel: ')[1].split('seasonList:')[0];
          var temp2 = temp1.substring(0,temp1.length-4);
          var temp3 = JSON.parse(temp2);
          //fs.appendFileSync('hackernews.txt', JSON.stringify(temp3.dailyScheduleListMap));
          var x=31;
          if(month<8){
            if(month%2==0){
              x=31;
            }
            else{
              x=32;
            }
          }
          else{
            if(month%2==0){
              x=32;
            }
            else{
              x=31;
            }
          }
          for(k=1; k<x; k++){
            var tempday=k;
            if(k<10){
              tempday='0'+k
            }
            for (j=0; j<temp3.dailyScheduleListMap['20170'+month+tempday].length; j++){
              var s1 = temp3.dailyScheduleListMap['20170'+month+tempday][j].homeTeamScore
              var s2 = temp3.dailyScheduleListMap['20170'+month+tempday][j].awayTeamScore
              if(s1=='0' && s2=='0'){
                s1 = null
                s2 = null
              }
              var t1='';
              var t2='';
              switch(temp3.dailyScheduleListMap['20170'+month+tempday][j].homeTeamName){
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
              switch(temp3.dailyScheduleListMap['20170'+month+tempday][j].awayTeamName){
                case '요미우리':
                  t2 = 'Yomiuri';
                  break;
                case '주니치':
                  t2 = 'Chunichi';
                  break;
                case '한신':
                  t2 = 'Hanshin';
                  break;
                case '히로시마':
                  t2 = 'Hiroshima';
                  break;
                case '요코하마':
                  t2 = 'Yokohama';
                  break;
                case '야쿠르트':
                  t2 = 'Tokyo';
                  break;
                case '니혼햄':
                  t2 = 'Hokkaido';
                  break;
                case '소프트뱅크':
                  t2 = 'Fukuoka';
                  break;
                case '지바롯데':
                  t2 = 'Chiba';
                  break;
                case '세이부':
                  t2 = 'Saitama';
                  break;
                case '라쿠텐':
                  t2 = 'Tohoku';
                  break;
                case '오릭스':
                  t2 = 'Orix';
                  break;
              }
              objArr.push({
                sport: "Baseball",
                league: "NPB",
                teamA: t1,
                teamB: t2,
                done: true, // Default: "false"
                scoreA: s1, // Default: "N/A"
                scoreB: s2, // Default: "N/A"
                datetime: moment('2017-0'+month+'-'+tempday+' '+temp3.dailyScheduleListMap['20170'+month+tempday][j].gameStartTime, 'YYYY-MM-DD h:mm').utcOffset(0).format(),
                update: moment().utcOffset(0).format()
              });
            }
          }
        }
      }
      count++;
      if(count==6){
        console.log(objArr);
        console.log('Storing schedules into mongodb');

        const monk = require('monk')
        const url = 'localhost:27017/main';
        const db = monk(url);

        db.then(() => {
            console.log('Connected correctly to server');
        });

        const collection = db.get('schedules');
        collection.remove();
        for(i=0; i<objArr.length; i++){
          collection.insert(objArr[i])
          .catch((err) => {
              console.log('Error while adding league keywords.');
          })
          .then(() => db.close());
        }
      }
    });
  }
}
function doit(){
  for(i=0; i<6; i++){
    funArr[i]();
  }
}
doit();
