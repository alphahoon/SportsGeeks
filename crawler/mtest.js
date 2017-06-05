var moment = require('moment');
var m1 = moment('2017-01-24, 17:00', 'YYYY-MM-DD, h:mm');
var m2 = moment().utcOffset(8);
var m = moment();
console.log(m1);
console.log(m2);
console.log(m);
var dates = [];
var teams = [];
var times = [];
var scores = [];
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var request = require('request');
var cheerio = require('cheerio');
var moment = require('moment');
var async = require('async');
var fs = require('fs');
function f1(callback){
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
    console.log('11');
    console.log(scores);
    callback();
  })
}
function f2(){
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
  	  scores.push($(this).find('span.time').text().trim());
    });
    console.log('22');
    console.log(scores);
  })
}
console.log('33');
f1(function(){f2()});
