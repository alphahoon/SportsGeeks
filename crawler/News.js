const monk = require('monk');
const url = 'localhost:27017/main';
const db = monk(url);
const News_Team = require('./News_Team');

db.then(() => {
    console.log('(News)Connected correctly to server');
});

const collectionTeams = db.get('teams');
const collectionNews = db.get('news');

collectionNews.remove();

collectionTeams.find()
    .then((teams) => {
        teams.forEach(function(team) {
            News_Team(team);
        });
    });
    
