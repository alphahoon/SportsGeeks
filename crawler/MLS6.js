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
        request("http://www.espnfc.com/major-league-soccer/19/scores?date=201706"+t, function(error, response, body) {
          console.log('request is '+"http://www.espnfc.com/major-league-soccer/19/scores?date=201706"+t);
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
                  //console.log(tteam[j].trim());
                  //console.log(sscore[j].trim());
                  var t1 = ''
                  switch(tteam[j].trim()){
                    case 'Colorado Rapids':
                      t1 = 'ColoradoRapids'
                      break;
                    case 'FC Dallas':
                      t1 = 'FCDallas'
                      break;
                    case 'Houston Dynamo':
                      t1 = 'HoustonDynamo'
                      break;
                    case 'LA Galaxy':
                      t1 = 'LAGalaxy'
                      break;
                    case 'Minnesota United FC':
                      t1 = 'MinnesotaUtd'
                      break;
                    case 'Portland Timbers':
                      t1 = 'PortlandTimbers'
                      break;
                    case 'Real Salt Lake':
                      t1 = 'RSL'
                      break;
                    case 'San Jose Earthquakes':
                      t1 = 'SanJose'
                      break;
                    case 'Seattle Sounders FC':
                      t1 = 'SeattleSounders'
                      break;
                    case 'Sporting Kansas City':
                      t1 = 'SportingKansas'
                      break;
                    case 'Vancouver Whitecaps':
                      t1 = 'Whitecaps'
                      break;
                    case 'Atlanta United FC':
                      t1 = 'AtlantaUtd'
                      break;
                    case 'Chicago Fire':
                      t1 = 'ChicagoFire'
                      break;
                    case 'Columbus Crew SC':
                      t1 = 'ColumbusCrew'
                      break;
                    case 'DC United':
                      t1 = 'DCUtd'
                      break;
                    case 'Montreal Impact':
                      t1 = 'MontrealImpact'
                      break;
                    case 'New England Revolution':
                      t1 = 'NewEngland'
                      break;
                    case 'New York City FC':
                      t1 = 'NewYorkFC'
                      break;
                    case 'New York Red Bulls':
                      t1 = 'NewYorkRedBulls'
                      break;
                    case 'Orlando City SC':
                      t1 = 'OrlandoSC'
                      break;
                    case 'Philadelphia Union':
                      t1 = 'PhiladelphiaUnion'
                      break;
                    case 'Toronto FC':
                      t1 = 'TorontoFC'
                      break;
                  }

                  if((OddOrEven%2)==0){
                    teamtemp = t1;
                    scoretemp = sscore[j].trim();
                  }
                  else{
                    var done1 = true;
                    var s1 = scoretemp
                    var s2 = sscore[j].trim()
                    if(scoretemp == ''){
                      s1 = null;
                      s2 = null;
                      done1 = false;
                    }
                    objArr.push({
                      sport: "Soccer",
                      league: "MLS",
                      teamA: teamtemp,
                      teamB: t1,
                      done: done1, // Default: "false"
                      scoreA: s1, // Default: "N/A"
                      scoreB: s2, // Default: "N/A"
                      datetime: moment('2017-06-'+dates[k], 'YYYY-MM-DD').utcOffset(0).add("hours", 9).format(),
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
