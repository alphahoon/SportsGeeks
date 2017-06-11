const monk = require('monk');
const url = 'localhost:27017/main';
const db = monk(url);

var News_Naver = require('./News_Naver');
var News_ESPN = require('./News_ESPN');

db.then(() => {
    console.log('(news.js)Connected correctly to server');
});

const collectionTeams = db.get('teams');
const collectionNews = db.get('news');

collectionNews.remove();

collectionTeams.findOne({id: "ManUtd"})
    .then((team) => {
        console.log("(news.js)found");

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
            })
            .catch((err) => {
                console.log('Error while inserting news');
            })
            .then(() => {
                console.log("(News Crawler)Close DB");
                db.close();
                console.log("(News Crawler)End of program");
            });
        });
    })
    .catch((err) => {
        console.log("(news.js)" + err);
    });
