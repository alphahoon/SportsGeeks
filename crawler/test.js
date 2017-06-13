var request = require('request');
var cheerio = require('cheerio');
var moment = require('moment');
var async = require('async');
var fs = require('fs');

request("http://sports.news.naver.com/kbaseball/schedule/index.nhn?date=20170611&month=06&year=2017&teamCode=", function(error, response, body) {
  fs.appendFileSync('hackernews.txt', body);
});
