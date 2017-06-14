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

  request("http://www.espnfc.com/spanish-primera-division/15/table", function(error, response, body) {
    console.log('request is '+"http://www.espnfc.com/spanish-primera-division/15/table");
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
      league: "Liga",
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
