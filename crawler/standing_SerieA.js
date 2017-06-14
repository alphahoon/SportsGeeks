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

  request("http://www.espnfc.com/italian-serie-a/12/table", function(error, response, body) {
    console.log('request is '+"http://www.espnfc.com/italian-serie-a/12/table");
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
        case 'Atalanta':
          t1 = 'Atalanta'
          break;
        case 'Bologna':
          t1 = 'Bologna'
          break;
        case 'Cagliari':
          t1 = 'Cagliari'
          break;
        case 'Chievo Verona':
          t1 = 'Chievo'
          break;
        case 'Crotone':
          t1 = 'Crotone'
          break;
        case 'Empoli':
          t1 = 'Empoli'
          break;
        case 'Fiorentina':
          t1 = 'Fiorentina'
          break;
        case 'Genoa':
          t1 = 'Genoa'
          break;
        case 'Internazionale':
          t1 = 'Inter'
          break;
        case 'Juventus':
          t1 = 'Juventus'
          break;
        case 'Lazio':
          t1 = 'Lazio'
          break;
        case 'AC Milan':
          t1 = 'Milan'
          break;
        case 'Napoli':
          t1 = 'Napoli'
          break;
        case 'Palermo':
          t1 = 'Palermo'
          break;
        case 'US Pescara':
          t1 = 'Pescara'
          break;
        case 'AS Roma':
          t1 = 'Roma'
          break;
        case 'Sampdoria':
          t1 = 'Sampdoria'
          break;
        case 'Sassuolo':
          t1 = 'Sasuuolo'
          break;
        case 'Torino':
          t1 = 'Torino'
          break;
        case 'Udinese':
          t1 = 'Udinese'
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
      league: "SerieA",
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
