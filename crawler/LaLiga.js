function crawl(){
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
  for(var i = 0; i < 31; i++){
      funArr[funArr.length] = function(){
        if(i+1<10){
          var t="0"+(i+1)
        }
        else{
          var t=i+1
        }
        request("http://www.espnfc.com/spanish-primera-division/15/scores?date=201705"+t, function(error, response, body) {
          console.log('request is '+"http://www.espnfc.com/spanish-primera-division/15/scores?date=201705"+t);
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
          if (a==31){
            var objArr = [];
            var OddOrEven = 0;
            var teamtemp = '';
            var scoretemp = 0;
            console.log(teams);
            console.log(scores);
            for(k=0; k<teams.length; k++){
              if(teams[k]!=''){
                console.log("date is "+dates[k])
                var tteam = teams[k].split('\n\t\t\t\t\t\n');
                var sscore = scores[k].split('\n\t\t\t\t\t\n');
                for(j=0; j<tteam.length; j++){
                  var t1 = ''
                  switch(tteam[j].trim()){
                    case 'Alavés':
                      t1 = 'Alaves'
                      break;
                    case 'Athletic Bilbao':
                      t1 = 'Athletic'
                      break;
                    case 'Atletico Madrid':
                      t1 = 'Atletico'
                      break;
                    case 'Celta Vigo':
                      t1 = 'Celta'
                      break;
                    case 'Deportivo La Coruña':
                      t1 = 'Deportivo'
                      break;
                    case 'Eibar':
                      t1 = 'Eibar'
                      break;
                    case 'Espanyol':
                      t1 = 'Espanyol'
                      break;
                    case 'Barcelona':
                      t1 = 'Barcelona'
                      break;
                    case 'Granada':
                      t1 = 'Granada'
                      break;
                    case 'Las Palmas':
                      t1 = 'LasPalmas'
                      break;
                    case 'Leganes':
                      t1 = 'Leganes'
                      break;
                    case 'Málaga':
                      t1 = 'Malaga'
                      break;
                    case 'Osasuna':
                      t1 = 'Osasuna'
                      break;
                    case 'Real Betis':
                      t1 = 'Betis'
                      break;
                    case 'Real Madrid':
                      t1 = 'Madrid'
                      break;
                    case 'Real Sociedad':
                      t1 = 'Sociedad'
                      break;
                    case 'Sevilla FC':
                      t1 = 'SevillaFC'
                      break;
                    case 'Sporting Gijón':
                      t1 = 'Sporting'
                      break;
                    case 'Valencia':
                      t1 = 'Valencia'
                      break;
                    case 'Villarreal':
                      t1 = 'Villarreal'
                      break;
                  }

                  if((OddOrEven%2)==0){
                    teamtemp = t1;
                    scoretemp = sscore[j].trim();
                  }
                  else{
                    objArr.push({
                      sport: "Soccer",
                      league: "Liga",
                      teamA: teamtemp,
                      teamB: t1,
                      done: true, // Default: "false"
                      scoreA: scoretemp, // Default: "N/A"
                      scoreB: sscore[j].trim(), // Default: "N/A"
                      datetime: moment('2017-05-'+dates[k], 'YYYY-MM-DD').utcOffset(0).add("hours", 9).format(),
                      update: moment().utcOffset(0).format()
                    });
                  }
                  console.log(OddOrEven);
                  OddOrEven++;
                }
              }
            }
            console.log(objArr);
            console.log('Storing schedules into mongodb');

            const monk = require('monk')
            const url = 'localhost:27017/main';
            const db = monk(url);

            db.then(() => {
                console.log('Connected correctly to server');
            });

            const collection = db.get('schedules');
            console.log(objArr);
            //collection.remove();
            for(i=0; i<objArr.length; i++){
              collection.insert(objArr[i])
              .catch((err) => {
                  console.log('Error while adding league keywords.');
              })
              .then(() => db.close());
            }
          }
        });
      };
  }
  function doit(){
    for(i=0; i<31; i++){
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
}
module.exports = crawl
