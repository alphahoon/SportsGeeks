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
var numArr = [];
var funArr = [];
var a = 0;
for(var i = 0; i < 21; i++){
    funArr[funArr.length] = function(){
      if(i+1<10){
        var t="0"+(i+1)
      }
      else{
        var t=i+1
      }
      request("http://www.espnfc.com/portuguese-liga/14/scores?date=201705"+t, function(error, response, body) {
        console.log('request is '+"http://www.espnfc.com/portuguese-liga/14/scores?date=201705"+t);
        if(error) {
          console.log("Error: " + error);
        }
        console.log("Status code: " + response.statusCode);

        var $ = cheerio.load(body);

        var search = $('div.scores');
        search.each(function(index){
          teams.push($(this).find('div.team-name').text());
          dates.push(t);
          scores.push($(this).find('div.team-score').text());
        });
        console.log('date changed')
        a++;
        if (a==21){
          console.log(teams)
          console.log(dates)
          for(k=0; k<teams.length; k++){
            if(teams[k]!=''){
              console.log("date is "+dates[k])
              var tteam = teams[k].split('\n\t\t\t\t\t\n');
              var sscore = scores[k].split('\n\t\t\t\t\t\n');
              for(j=0; j<tteam.length; j++){
                console.log(tteam[j].trim())
                console.log(sscore[j].trim())
              }
            }
          }

        }
      });
    };
}
function doit(){
  for(i=0; i<21; i++){
    funArr[i]();
  }
}
function print(){
  for(i=0; i<teams.length; i++){
    //var tteam = teams[i].split('\n\t\t\t\t\t\n');
    //var sscore = scores[i].split('\n\t\t\t\t\t\n');
    //for(i=0; i<tteam.length; i++){
    //  console.log(tteam[i].trim());
    //  console.log(sscore[i].trim())
    console.log(teams[i])
  }
}
doit()
/*

*/
