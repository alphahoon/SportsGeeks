var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var request = require('request');
var cheerio = require('cheerio');
var async = require('async');
var fs = require('fs');
var timestamp = Date.now();

request("http://www.kleague.com/ko/content/%EA%B2%BD%EA%B8%B0%EC%9D%BC%EC%A0%95", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  var dates = [];
  var teams = [];
  var times = [];
  var search = $('div.schedule_month, tr.division');
  search.each(function(index){
	  dates.push($(this).find('span.schedule_month_number').text());
	  teams.push($(this).find('span.name').text().trim());
	  times.push($(this).find('span.time').text().trim());
  });
  console.log(dates);
  console.log('display teams');
  console.log(teams);
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
      for (var index = 0; index < dates.length; index++) {
    	  if (dates[index]==''){
              console.log('write db')
    		  var teamtemp = teams[index].split('\r\n')
              objArr.push(new Schedules({
            	  leagueName: 'Kleague',
            	  team1Name: teamtemp[0].trim(),
            	  team2Name: teamtemp[1].trim(),
            	  team1score: 0,
            	  team2score: 0,
            	  date: mdate
              }));
    	  }
    	  else{
              console.log('changing date')
    		  mdate = dates[index];
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
});
