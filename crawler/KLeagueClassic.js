function crawl(){
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
                t1 = 'SuwonBluewings';
                break;
              case 'POHANG':
                t1 = 'PohangSteelers'
                break;
              case 'ULSAN':
                t1 = 'UlsanFC'
                break;
              case 'JEONNAM':
                t1 = 'JeonnamFC'
                break;
              case 'JEONBUK':
                t1 = 'JeonbukFC'
                break;
              case 'DAEGU':
                t1 = 'DaeguFC'
                break;
              case 'GWANGJU':
                t1 = 'GwangjuFC'
                break;
              case 'SEOUL':
                t1 = 'FCSeoul'
                break;
              case 'GANGWON':
                t1 = 'GangwonFC'
                break;
              case 'JEJU':
                t1 = 'JejuUtd'
                break;
              case 'INCHEON':
                t1 = 'IncheonUtd'
                break;
              case 'SANGJU':
                t1 = 'SangjuFC'
            }
            switch(teamtemp[1].trim()){
              case 'SUWON':
                t2 = 'SuwonBluewings';
                break;
              case 'POHANG':
                t2 = 'PohangSteelers'
                break;
              case 'ULSAN':
                t2 = 'UlsanFC'
                break;
              case 'JEONNAM':
                t2 = 'JeonnamFC'
                break;
              case 'JEONBUK':
                t2 = 'JeonbukFC'
                break;
              case 'DAEGU':
                t2 = 'DaeguFC'
                break;
              case 'GWANGJU':
                t2 = 'GwangjuFC'
                break;
              case 'SEOUL':
                t2 = 'FCSeoul'
                break;
              case 'GANGWON':
                t2 = 'GangwonFC'
                break;
              case 'JEJU':
                t2 = 'JejuUtd'
                break;
              case 'INCHEON':
                t2 = 'IncheonUtd'
                break;
              case 'SANGJU':
                t2 = 'SangjuFC'
            }
            objArr.push({
              sport: "Soccer",
              league: "KLeague",
              teamA: t1,
              teamB: t2,
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
                t1 = 'SuwonBluewings';
                break;
              case 'POHANG':
                t1 = 'PohangSteelers'
                break;
              case 'ULSAN':
                t1 = 'UlsanFC'
                break;
              case 'JEONNAM':
                t1 = 'JeonnamFC'
                break;
              case 'JEONBUK':
                t1 = 'JeonbukFC'
                break;
              case 'DAEGU':
                t1 = 'DaeguFC'
                break;
              case 'GWANGJU':
                t1 = 'GwangjuFC'
                break;
              case 'SEOUL':
                t1 = 'FCSeoul'
                break;
              case 'GANGWON':
                t1 = 'GangwonFC'
                break;
              case 'JEJU':
                t1 = 'JejuUtd'
                break;
              case 'INCHEON':
                t1 = 'IncheonUtd'
                break;
              case 'SANGJU':
                t1 = 'SangjuFC'
            }
            switch(teamtemp[1].trim()){
              case 'SUWON':
                t2 = 'SuwonBluewings';
                break;
              case 'POHANG':
                t2 = 'PohangSteelers'
                break;
              case 'ULSAN':
                t2 = 'UlsanFC'
                break;
              case 'JEONNAM':
                t2 = 'JeonnamFC'
                break;
              case 'JEONBUK':
                t2 = 'JeonbukFC'
                break;
              case 'DAEGU':
                t2 = 'DaeguFC'
                break;
              case 'GWANGJU':
                t2 = 'GwangjuFC'
                break;
              case 'SEOUL':
                t2 = 'FCSeoul'
                break;
              case 'GANGWON':
                t2 = 'GangwonFC'
                break;
              case 'JEJU':
                t2 = 'JejuUtd'
                break;
              case 'INCHEON':
                t2 = 'IncheonUtd'
                break;
              case 'SANGJU':
                t2 = 'SangjuFC'
            }
            objArr.push({
              sport: "Soccer",
              league: "KLeague",
              teamA: t1,
              teamB: t2,
              done: false, // Default: "false"
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
        //collection.remove();
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
}
module.exports = crawl
