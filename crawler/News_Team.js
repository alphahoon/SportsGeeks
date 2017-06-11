function News_Team(team) {
    const monk = require('monk');
    const url = 'localhost:27017/main';
    const db = monk(url);

    var News_Naver = require('./News_Naver');
    var News_ESPN = require('./News_ESPN');
    var News_Yahoo = require('./News_Yahoo');

    db.then(() => {
        console.log('(news.js)Connected correctly to server');
    });

    const collectionNews = db.get('news');

    var id = team.id;
    var article = new Array();

    var newDocument = {
        "keyword": [
            team.name.en,
            team.name.kr,
            team.alias.en,
            team.alias.kr
        ],
        "team": id
    }

    News_ESPN(team.name.en, function(result) {
        article = article.concat(result);

        News_ESPN(team.alias.en, function(result) {
            article = article.concat(result);

            News_Yahoo(team.name.en, function(result) {
                article = article.concat(result);

                News_Yahoo(team.alias.en, function(result) {
                    article = article.concat(result);

                    News_Naver(team.name.kr, function(result) {
                        article = article.concat(result);

                        News_Naver(team.alias.kr, function(result) {
                            article = article.concat(result);

                            newDocument.article = article;

                            collectionNews.insert(newDocument)
                            .catch((err) => {
                                console.log("(News_Team)Error while inserting news");
                            })
                            .then(() => {
                                console.log("(News_Team)Close DB");
                                db.close();
                                console.log("(News_Team)End of program");
                            });
                        });
                    });
                });
            });
        });
    });
}

module.exports = News_Team;
