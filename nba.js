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

request("http://stats.nba.com/schedule/#!/?rfr=nba&PD=N&Month=8", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  var search = $('section.row.collapse.schedule-content.ng-scope');
  search.each(function(index){
	  dates.push($(this).find('a').text());
	  teams.push($(this).find('th.schedule-game__team-name').text());
	  scores.push($(this).find('td.schedule-game__team-score.hide-for-pre-game.ng-binding').text());
  });
})

request("http://stats.nba.com/schedule/#!/?rfr=nba", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  var search = $('section.row.collapse.schedule-content.ng-scope');
  search.each(function(index){
    dates.push($(this).find('a').text());
	  teams.push($(this).find('th.schedule-game__team-name').text());
    times.push($(this).find('span.hide-for-pre-game.hide-for-post-game.ng-binding').text());
  });
  console.log(dates);
  console.log('display teams');
  console.log(teams);
  console.log('display scores');
  console.log(scores);
  console.log('display times');
  console.log(times);
})
