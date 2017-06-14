console.log('(News_Test)Begin');

const monk = require('monk');
const url = 'localhost:27017/main';
const db = monk(url);
const News_Naver = require('./News_Naver');
const News_Yahoo = require('./News_Yahoo');

db.then(() => {
    console.log('(News_Test)Connected correctly to server');
});

var collection = db.get('teams');

collection.find()
    .then((teams) => {
        teams.forEach(function(team) {
            News_Naver(team.name.kr, function(result) {
                console.log("News_Test " + team.id + " is done");
            });
        });
    })
    .catch((err) => {
        console.log('(News_Test)Error : ' + err);
    })
    .then(() => {
        db.close();
        console.log('(News_Test)End');
    });
