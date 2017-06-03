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

request("https://www.mlssoccer.com/schedule", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  var search = $('li.row.row_no_padding_first, li.row.row_no_padding');
  search.each(function(index){
	  dates.push($(this).find('div.match_date').text());
	  scores.push($(this).find('span.match_score').text());
    times.push($(this).find('span.match_status.upcoming').text());
  });
  $('span.club_name').each(function(index){
    teams.push($(this).find('a').text());
  });
  console.log(dates);
  console.log(teams);
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
        var ddate = mdate.split(', ')
        var ttime = times[index].split('PM')
        console.log(ttime[0]);
        console.log(ddate[1]);
        if(ttime[0]!=''){
          var m = moment('2017 '+ddate[1]+', '+ttime[0]+'pm', 'YYYY MMM DD, h:mm a').subtract("hours", 14).format("L, h:mm a")
        }
        else{
          var m = moment('2017 '+ddate[1], 'YYYY MMM DD')
        }

        var score = scores[index].split(":")
        objArr.push(new Schedules({
          leagueName: 'MLS',
          team1Name: teams[2*index],
          team2Name: teams[2*index+1],
          team1score: scores[index].substring(0,1),
          team2score: scores[index].substring(1,2),
          date: m,
          time: ttime[0]
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
