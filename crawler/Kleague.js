var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var request = require('request');
var cheerio = require('cheerio');
var moment = require('moment');
var async = require('async');
var fs = require('fs');
var timestamp = Date.now();
var dates = [];
var teams = [];
var times = [];
var scores = [];
function get1(callback){
  request("http://www.kleague.com/en/content/%EA%B2%BD%EA%B8%B0%EA%B2%B0%EA%B3%BC-0", function(error, response, body) {
    if(error) {
      console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);

    var search = $('div.schedule_month, tr.division');
    search.each(function(index){
  	  dates.push($(this).find('span.schedule_month_number').text());
  	  teams.push($(this).find('span.name').text().trim());
  	  scores.push($(this).find('span.time').text().trim());
    });
  callback();
  })
}
function get2(){

request("http://www.kleague.com/en/content/%EA%B2%BD%EA%B8%B0%EC%9D%BC%EC%A0%95", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  var search = $('div.schedule_month, tr.division');
  search.each(function(index){
    dates.push($(this).find('span.schedule_month_number').text());
    teams.push($(this).find('span.name').text().trim());
    times.push($(this).find('span.time').text().trim());
  });
      var objArr = [];
      var mdate = dates[0];
      for (var index = 0; index < scores.length; index++) {
        if (dates[index]==''){
              console.log('write db')
          var teamtemp = teams[index].split('\r\n')
          var ddate = mdate.substring(0,10);
          var m = moment(ddate, 'YYYY-MM-DD').utcOffset(0).add("hours", 9).format()
          var score = scores[index].split(":")
          var m1 = moment().utcOffset(0).format()
          var t1 = ''
          var t2 = ''
          switch(teamtemp[0].trim()){
            case 'SUWON':
              t1 = '수원';
              break;
            case 'POHANG':
              t1 = '포항'
              break;
            case 'ULSAN':
              t1 = ' 울산'
              break;
            case 'JEONNAM':
              t1 = '전남'
              break;
            case 'JEONBUK':
              t1 = '전북'
              break;
            case 'DAEGU':
              t1 = '대구'
              break;
            case 'GWANGJU':
              t1 = '광주'
              break;
            case 'SEOUL':
              t1 = '서울'
              break;
            case 'GANGWON':
              t1 = '강원'
              break;
            case 'JEJU':
              t1 = '제주'
              break;
            case 'INCHON':
              t1 = '인천'
              break;
            case 'SANGJU':
              t1 = '상주'
          }
          switch(teamtemp[1].trim()){
            case 'SUWON':
              t2 = '수원';
              break;
            case 'POHANG':
              t2 = '포항'
              break;
            case 'ULSAN':
              t2 = ' 울산'
              break;
            case 'JEONNAM':
              t2 = '전남'
              break;
            case 'JEONBUK':
              t2 = '전북'
              break;
            case 'DAEGU':
              t2 = '대구'
              break;
            case 'GWANGJU':
              t2 = '광주'
              break;
            case 'SEOUL':
              t2 = '서울'
              break;
            case 'GANGWON':
              t2 = '강원'
              break;
            case 'JEJU':
              t2 = '제주'
              break;
            case 'INCHON':
              t2 = '인천'
              break;
            case 'SANGJU':
              t2 = '상주'
          }
          objArr.push({
            sport: {
                id: "Soccer",
                type: "sport",
                name: {
                    en: "Soccer",
                    kr: "축구"
                },
                alias: {
                    en: "Soccer",
                    kr: "축구"
                },
                img: "sports/soccer.png"
            },
            league: {
                id: "Kleague",
                type: "league",
                country: {
                    en: "Korea",
                    kr: "한국",
                    img: "country/korea.png"
                },
                name: {
                    en: "Kleague",
                    kr: "K리그"
                },
                alias: {
                    en: "Kleague",
                    kr: "K리그"
                },
                img: "leagues/Kleague.png"
            },
            teamA: {
                id: teamtemp[0].trim(),
                type: "team",
                name: {
                    en: teamtemp[0].trim(),
                    kr: t1
                },
                alias: {
                    en: teamtemp[0].trim(),
                    kr: t1
                },
                img: "teams/"+teamtemp[0].trim()+".png"
            },
            teamB: {
                id: teamtemp[1].trim(),
                type: "team",
                name: {
                    en: teamtemp[1].trim(),
                    kr: t2
                },
                alias: {
                    en: teamtemp[1].trim(),
                    kr: t2
                },
                img: "teams/"+teamtemp[1].trim()+".png"
            },
            done: true, // Default: "false"
            scoreA: score[0], // Default: "N/A"
            scoreB: score[1], // Default: "N/A"
            datetime: m,
            update: m1
          });
        }
        else{
              console.log('changing date')
          mdate = dates[index];
        }
      }
      for (var index = 0; index < times.length; index++) {
        if (dates[scores.length+index]==''){
              console.log('write db')
          var teamtemp = teams[scores.length+index].split('\r\n')
          var ddate = mdate.substring(0,10);
          var m = moment(ddate+', '+times[index]+' pm', 'YYYY-MM-DD, h:mm a').utcOffset(0).format()
          var m1 = moment().utcOffset(0).format()

            var t1 = ''
            var t2 = ''
            switch(teamtemp[0].trim()){
              case 'SUWON':
                t1 = '수원';
                break;
              case 'POHANG':
                t1 = '포항'
                break;
              case 'ULSAN':
                t1 = ' 울산'
                break;
              case 'JEONNAM':
                t1 = '전남'
                break;
              case 'JEONBUK':
                t1 = '전북'
                break;
              case 'DAEGU':
                t1 = '대구'
                break;
              case 'GWANGJU':
                t1 = '광주'
                break;
              case 'SEOUL':
                t1 = '서울'
                break;
              case 'GANGWON':
                t1 = '강원'
                break;
              case 'JEJU':
                t1 = '제주'
                break;
              case 'INCHON':
                t1 = '인천'
                break;
              case 'SANGJU':
                t1 = '상주'
            }
            switch(teamtemp[1].trim()){
              case 'SUWON':
                t2 = '수원';
                break;
              case 'POHANG':
                t2 = '포항'
                break;
              case 'ULSAN':
                t2 = ' 울산'
                break;
              case 'JEONNAM':
                t2 = '전남'
                break;
              case 'JEONBUK':
                t2 = '전북'
                break;
              case 'DAEGU':
                t2 = '대구'
                break;
              case 'GWANGJU':
                t2 = '광주'
                break;
              case 'SEOUL':
                t2 = '서울'
                break;
              case 'GANGWON':
                t2 = '강원'
                break;
              case 'JEJU':
                t2 = '제주'
                break;
              case 'INCHON':
                t2 = '인천'
                break;
              case 'SANGJU':
                t2 = '상주'
            }
          objArr.push({
            sport: {
                id: "Soccer",
                type: "sport",
                name: {
                    en: "Soccer",
                    kr: "축구"
                },
                alias: {
                    en: "Soccer",
                    kr: "축구"
                },
                img: "sports/soccer.png"
            },
            league: {
                id: "Kleague",
                type: "league",
                country: {
                    en: "Korea",
                    kr: "한국",
                    img: "country/korea.png"
                },
                name: {
                    en: "Kleague",
                    kr: "K리그"
                },
                alias: {
                    en: "Kleague",
                    kr: "K리그"
                },
                img: "leagues/Kleague.png"
            },
            teamA: {
                id: teamtemp[0].trim(),
                type: "team",
                name: {
                    en: teamtemp[0].trim(),
                    kr: t1
                },
                alias: {
                    en: teamtemp[0].trim(),
                    kr: t1
                },
                img: "teams/"+teamtemp[0].trim()+".png"
            },
            teamB: {
                id: teamtemp[1].trim(),
                type: "team",
                name: {
                    en: teamtemp[1].trim(),
                    kr: t2
                },
                alias: {
                    en: teamtemp[1].trim(),
                    kr: t2
                },
                img: "teams/"+teamtemp[1].trim()+".png"
            },
            done: true, // Default: "false"
            scoreA: null, // Default: "N/A"
            scoreB: null, // Default: "N/A"
            datetime: m,
            update: m1
          });
        }
        else{
              console.log('changing date')
          mdate = dates[scores.length+index];
        }
      }
      console.log(objArr);
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
})
}
get1(function(){get2()})
