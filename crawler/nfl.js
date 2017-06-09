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

request("http://www.espn.com/nfl/schedule", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  $('div#sched-container').each(function(index){
	  $('h2.table-caption').each(function(elem){
      dates.push($(this).text())
    });
    $('td > a').each(function(elem){
      teams.push($(this).text())
    });
  });
  console.log(dates)
  console.log(teams)
})
