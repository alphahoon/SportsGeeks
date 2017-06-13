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
    request("http://sports.news.naver.com/wbaseball/schedule/index.nhn?category=mlb&year=2017&month=0"+month, function(error, response, body) {
      console.log('request is '+"http://sports.news.naver.com/wbaseball/schedule/index.nhn?category=mlb&year=2017&month=0"+month)
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
              var t1=''
              var t2=''
              switch(temp3.dailyScheduleListMap['20170'+month+tempday][j].homeTeamName){
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
                case 'LA에인절스':
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
                case 'LA다저스':
                  t1='Dodgers';
                  break;
                case '샌디에이고':
                  t1='Padres';
                  break;
                case '샌프란시스코':
                  t1='Giants';
                  break;
              }
              switch(temp3.dailyScheduleListMap['20170'+month+tempday][j].awayTeamName){
                case '볼티모어':
                  t2='Orioles';
                  break;
                case '보스턴':
                  t2='RedSox';
                  break;
                case '뉴욕Y':
                  t2='Yankees';
                  break;
                case '탬파베이':
                  t2='Rays';
                  break;
                case '토론토':
                  t2='BlueJays';
                  break;
                case '시카고W':
                  t2='WhiteSox';
                  break;
                case '클리블랜드':
                  t2='Cleveland';
                  break;
                case '디트로이트':
                  t2='Detroit';
                  break;
                case '캔자스시티':
                  t2='KansasCity';
                  break;
                case '미네소타':
                  t2='Twins';
                  break;
                case '휴스턴':
                  t2='Houston';
                  break;
                case 'LA에인절스':
                  t2='Angels';
                  break;
                case '오클랜드':
                  t2='Oakland';
                  break;
                case '시애틀':
                  t2='Mariners';
                  break;
                case '텍사스':
                  t2='Rangers';
                  break;
                case '애틀랜타':
                  t2='Braves';
                  break;
                case '마이애미':
                  t2='Marlins';
                  break;
                case '뉴욕M':
                  t2='Mets';
                  break;
                case '필라델피아':
                  t2='Phillies';
                  break;
                case '워싱턴':
                  t2='Nationals';
                  break;
                case '시카고C':
                  t2='Cubs';
                  break;
                case '신시내티':
                  t2='Cincinnati';
                  break;
                case '밀워키':
                  t2='Brewers';
                  break;
                case '피츠버그':
                  t2='Pirates';
                  break;
                case '세인트루이스':
                  t2='Cardinals';
                  break;
                case '애리조나':
                  t2='Diamondbacks';
                  break;
                case '콜로라도':
                  t2='Rockies';
                  break;
                case 'LA다저스':
                  t2='Dodgers';
                  break;
                case '샌디에이고':
                  t2='Padres';
                  break;
                case '샌프란시스코':
                  t2='Giants';
                  break;
              }
              objArr.push({
                sport: "Baseball",
                league: "MLB",
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
