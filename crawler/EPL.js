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
        request("http://www.espnfc.com/english-premier-league/23/scores?date=201705"+t, function(error, response, body) {
          console.log('request is '+"http://www.espnfc.com/english-premier-league/23/scores?date=201705"+t);
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
            for(k=0; k<teams.length; k++){
              if(teams[k]!=''){
                console.log(teams);
                console.log(scores);
                console.log("date is "+dates[k])
                var tteam = teams[k].split('\n\t\t\t\t\t\n');
                var sscore = scores[k].split('\n\t\t\t\t\t\n');
                for(j=0; j<tteam.length; j++){
                  var t1 = ''
                  switch(tteam[j].trim()){
                    case 'Arsenal':
                      t1 = 'Arsenal'
                      break;
                    case 'AFC Bournemouth':
                      t1 = 'AFCBournemouth'
                      break;
                    case 'Burnley':
                      t1 = 'Burnley'
                      break;
                    case 'Chelsea':
                      t1 = 'Chelsea'
                      break;
                    case 'Crystal Palace':
                      t1 = 'CrystalPalace'
                      break;
                    case 'Everton':
                      t1 = 'Everton'
                      break;
                    case 'Hull City':
                      t1 = 'HullCity'
                      break;
                    case 'Leicester City':
                      t1 = 'LeicesterCity'
                      break;
                    case 'Liverpool':
                      t1 = 'Liverpool'
                      break;
                    case 'Manchester City':
                      t1 = 'ManCity'
                      break;
                    case 'Manchester United':
                      t1 = 'ManUtd'
                      break;
                    case 'Middlesbrough':
                      t1 = 'Middlesbrough'
                      break;
                    case 'Southampton':
                      t1 = 'Southampton'
                      break;
                    case 'Stoke City':
                      t1 = 'StokeCity'
                      break;
                    case 'Sunderland':
                      t1 = 'Sunderland'
                      break;
                    case 'Swansea City':
                      t1 = 'SwanseaCity'
                      break;
                    case 'Tottenham Hotspur':
                      t1 = 'Tottenham'
                      break;
                    case 'Watford':
                      t1 = 'Watford'
                      break;
                    case 'West Bromwich Albion':
                      t1 = 'WestBrom'
                      break;
                    case 'West Ham United':
                      t1 = 'WestHam'
                      break;
                  }

                  if((OddOrEven%2)==0){
                    teamtemp = t1;
                    scoretemp = sscore[j].trim();
                  }
                  else{
                    objArr.push({
                      sport: "Soccer",
                      league: "EPL",
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
