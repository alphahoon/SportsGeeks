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

  request("http://www.espnfc.com/english-premier-league/23/table?season=2016", function(error, response, body) {
    console.log('request is '+"http://www.espnfc.com/english-premier-league/23/table?season=2016");
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
      league: "EPL",
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
