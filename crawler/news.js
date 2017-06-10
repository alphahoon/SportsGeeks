const monk = require('monk');
const url = 'localhost:27017/main';
const db = monk(url);

var async = require('async');
var News_Naver = require('./News_Naver');
var News_ESPN = require('./News_ESPN');

db.then(() => {
    console.log('(news.js)Connected correctly to server');
});

const collectionTeams = db.get('teams');
const collectionNews = db.get('news');

collectionNews.remove();

collectionTeams.find({id: "ManUtd"})
    .then((teams) => {
        console.log("(news.js)found");

        teams.forEach(function(team) {
            var id = team.id;
            var name_en = team.name.en;
            var name_kr = team.name.kr;
            var alias_en = team.alias.en;
            var alias_kr = team.alias.kr;

            News_ESPN(name_en, function(result) {
                collectionNews.insert({
                    "keyword": [
                        name_en,
                        name_kr,
                        alias_en,
                        alias_kr
                    ],
                    "team": id,
                    "article": result
                });
            });
        });

        console.log("news.js)End of forEach loop");
    })
    .catch((err) => {
        console.log("(news.js)" + err);
    })
    .then(() => {
        console.log("(news.js)Close DB");
        db.close();
        console.log("(news.js)End of program");
    })

//const collection = db.get('news');

//collection.find
