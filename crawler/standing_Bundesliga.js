function crawl(){
  var request = require('request');
  var cheerio = require('cheerio');
  var moment = require('moment');
  var async = require('async');
  var fs = require('fs');
  var timestamp = Date.now();
  var teams = [];
  var statistics = [];
  var pos = [];

  var objArr = [];

  request("http://www.espnfc.com/german-bundesliga/10/table", function(error, response, body) {
    console.log('request is '+"http://www.espnfc.com/german-bundesliga/10/table");
    if(error) {
      console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);
    $('td.team').each(function(index){
      teams.push($(this).text().trim());
    });
    $('td.groupA').each(function(index){
      statistics.push($(this).text());
    })
    $('td.pos').each(function(index){
      pos.push($(this).text())
    });
    for(i=0;i<teams.length;i++){
      var t1 = ''
      switch(teams[i]){
        case 'Bayer Leverkusen':
          t1 = 'Leverkuzen'
          break;
        case 'Borussia Dortmund':
          t1 = 'Dortmund'
          break;
        case 'Borussia Monchengladbach':
          t1 = 'Monchengladbach'
          break;
        case 'Eintracht Frankfurt':
          t1 = 'Frankfurt'
          break;
        case 'FC Augsburg':
          t1 = 'Augsburg'
          break;
        case 'Bayern Munich':
          t1 = 'Bayern'
          break;
        case 'FC Ingolstadt 04':
          t1 = 'Ingolstadt'
          break;
        case 'Schalke 04':
          t1 = 'Schalke'
          break;
        case 'Hamburg SV':
          t1 = 'Hamburger'
          break;
        case 'Hertha Berlin':
          t1 = 'Hertha'
          break;
        case 'RB Leipzig':
          t1 = 'Leipzig'
          break;
        case 'SC Freiburg':
          t1 = 'Freiburg'
          break;
        case 'SV Darmstadt 98':
          t1 = 'Darmstadt'
          break;
        case 'Werder Bremen':
          t1 = 'Bremen'
          break;
        case 'TSG Hoffenheim':
          t1 = 'Hoffenheim'
          break;
        case 'VfL Wolfsburg':
          t1 = 'Wolfsburg'
          break;
        case 'FC Cologne':
          t1 = 'Koln'
          break;
        case 'Mainz':
          t1 = 'Mainz'
          break;
      }
      objArr.push({
        team: t1,
        rank: pos[i],
        matches: statistics[6*i],
        wins: statistics[6*i+1],
        draws: statistics[6*i+2],
        losses: statistics[6*i+3],
        winrate: Math.round((Number(statistics[6*i+1])/Number(statistics[6*i]))*100)+"%"
      });
    }
    console.log('Storing schedules into mongodb');

    const monk = require('monk')
    const url = 'localhost:27017/main';
    const db = monk(url);

    db.then(() => {
        console.log('Connected correctly to server');
    });

    const collection = db.get('standings');
    //collection.remove();
    var standing = {
      sport: "Soccer",
      league: "Bundesliga",
      standings: objArr,
      update: moment().utcOffset(0).format()
    }
    console.log(standing)
    collection.insert(standing)
    .catch((err) => {
        console.log('Error while adding league keywords.');
    })
    .then(() => db.close());
  });
}
module.exports = crawl
