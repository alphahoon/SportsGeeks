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
})

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
  console.log(dates);
  console.log('display teams');
  console.log(teams);
  console.log('display scores');
  console.log(scores);
  console.log('display times');
  console.log(times);
  mongoose.connect('mongodb://localhost:27017/main');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
      console.log('mongodb connected!');
      db.db.listCollections({name: 'schedules'})
        .next((err, collinfo) => {
          if (err) console.log(err);
          if (collinfo)
            db.db.dropCollection('schedules');
              var Schedules = require('./models/schedule.js');
      var objArr = [];
      var mdate = dates[0];
      for (var index = 0; index < scores.length; index++) {
        if (dates[index]==''){
              console.log('write db')
          var teamtemp = teams[index].split('\r\n')
          var ddate = mdate.substring(0,10);
          var m = moment(ddate, 'YYYY-MM-DD')
          var score = scores[index].split(":")
          objArr.push(new Schedules({
            leagueName: 'Kleague',
            team1Name: teamtemp[0].trim(),
            team2Name: teamtemp[1].trim(),
            team1score: score[0],
            team2score: score[1],
            date: m,
            time: null
          }));
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
          var m = moment(ddate+', '+times[index]+' pm', 'YYYY-MM-DD, h:mm a').format("L, h:mm a")
          objArr.push(new Schedules({
            leagueName: 'Kleague',
            team1Name: teamtemp[0].trim(),
            team2Name: teamtemp[1].trim(),
            team1score: null,
            team2score: null,
            date: m,
            time: times[index]
          }));
        }
        else{
              console.log('changing date')
          mdate = dates[scores.length+index];
        }
      }
      console.log(objArr);
      console.log('Storing schedules into mongodb');
      async.each(objArr, function(object, callback) {
          object.save(function(err){
              if(err) {
                  callback(err)
              }
              else {
                  callback()
              }
          });
      }, function (err){
          if(err) {
              console.log(err);
              db.close();
          }
          else {
              console.log('Updating schedules completed!');
              db.close();
              var elapsedTime = (Date.now() - timestamp)/1000;
              console.log('Time elpased = ' + elapsedTime + ' sec');
          }
      });
  });
});
})
