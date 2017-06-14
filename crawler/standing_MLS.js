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

  request("http://www.espnfc.com/major-league-soccer/19/table", function(error, response, body) {
    console.log('request is '+"http://www.espnfc.com/major-league-soccer/19/table");
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
      league: "MLS",
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
