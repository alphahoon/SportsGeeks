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


request("http://www.espn.com/mlb/scoreboard/_/date/20170604", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  var search = $('div.scoreboard-top');
  search.each(function(index){
	  teams.push($(this).find('span.sb-team-short').text());
    scores.push($(this).find('td.total').text());
  });
  console.log('display teams');
  console.log(teams);
  console.log('display scores');
  console.log(scores);
})
