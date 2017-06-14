console.log("(News)Begin");

const monk = require('monk');
const url = 'localhost:27017/main';
const db = monk(url);
const News_Team = require('./News_Team');

db.then(() => {
    console.log('(News)Connected correctly to server');

    const collectionTeams = db.get('teams');
    const collectionNews = db.get('news');

    collectionNews.remove();
    console.log('(News)Removed all news');

    collectionTeams.find()
        .then((teams) => {
            teams.forEach(function(team) {
                News_Team(team);
            });
        })
        .catch((err) => {
            console.log('(News)' + err);
        })
        .then(() => {
            db.close();
            console.log('(News)End');
        });
});   
