var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var request = require('request');
var cheerio = require('cheerio');
var moment = require('moment');
var async = require('async');
var fs = require('fs');
var timestamp = Date.now();
var dates = [];
var team1 = [];
var team2 = [];
var times = [];
var scores = [];

request("http://eng.koreabaseball.com/Schedule/DailySchedule.aspx", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  var search = $('tr');
  search.each(function(index){
	  dates.push($(this).find('td.bd_r.data_top').text());
	  team1.push($(this).find('td.loop_r').text());
    team2.push($(this).find('td.loop_l').text());
	  scores.push($(this).find('span.score_schedule').text());
    times.push($(this).find('td.TIME').text());
  });
  console.log(dates);
  console.log(team1);
  console.log(team2);
  console.log(scores);
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
      for (var index = 1; index < dates.length; index++) {
        if (dates[index]!=''){
          console.log('changing date')
          mdate = dates[index];
        }
        console.log('write db')
        var ddate = mdate.substring(0,5);
        var m = moment('2017.'+ddate+', '+times[index]+' pm', 'YYYY.MM.DD, h:mm a').format('L, h:mm a')
        var score = scores[index].split(":")
        objArr.push(new Schedules({
          leagueName: 'KBO',
          team1Name: team1[index],
          team2Name: team2[index],
          team1score: score[0],
          team2score: score[1],
          date: m,
          time: times[index]
        }));
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
