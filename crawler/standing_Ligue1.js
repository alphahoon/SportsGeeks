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

  request("http://www.espnfc.com/french-ligue-1/9/table", function(error, response, body) {
    console.log('request is '+"http://www.espnfc.com/french-ligue-1/9/table");
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
        case 'AS Monaco':
          t1 = 'Monaco'
          break;
        case 'Paris Saint-Germain':
          t1 = 'PSG'
          break;
        case 'Nice':
          t1 = 'OGC_Nice'
          break;
        case 'Lyon':
          t1 = 'Lyon'
          break;
        case 'Marseille':
          t1 = 'Marseille'
          break;
        case 'Bordeaux':
          t1 = 'Bordeaux'
          break;
        case 'Nantes':
          t1 = 'Nantes'
          break;
        case 'St Etienne':
          t1 = 'SaintEtienne'
          break;
        case 'Stade Rennes':
          t1 = 'Rennais'
          break;
        case 'Guingamp':
          t1 = 'Guingamp'
          break;
        case 'Lille':
          t1 = 'LOSC'
          break;
        case 'Angers':
          t1 = 'Angers'
          break;
        case 'Toulouse':
          t1 = 'Toulouse'
          break;
        case 'Metz':
          t1 = 'Metz'
          break;
        case 'Montpellier':
          t1 = 'Montpellier'
          break;
        case 'Dijon FCO':
          t1 = 'Dijon'
          break;
        case 'Caen':
          t1 = 'Caen'
          break;
        case 'Lorient':
          t1 = 'Lorient'
          break;
        case 'AS Nancy Lorraine':
          t1 = 'Nancy'
          break;
        case 'Bastia':
          t1 = 'Bastia'
          break;
        case 'Troyes':
          t1 = 'Troyes'
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
      league: "Ligue1",
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
