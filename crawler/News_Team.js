function News_Team(team) {
    console.log("(News_Team)" + team.id + " Begin");

    var monk = require('monk');
    var url = 'localhost:27017/main';
    var db = monk(url);

    var News_Naver = require('./News_Naver');
    var News_ESPN = require('./News_ESPN');
    var News_Yahoo = require('./News_Yahoo');

    db.then(() => {
        console.log('(News_Team)Connected correctly to server');
    });

    var collectionNews = db.get('news');
    var article = new Array();

    var newDocument = {
        "keyword": [
            team.name.en,
            team.name.kr,
            team.alias.en,
            team.alias.kr
        ],
        "team": team.id,
        "article": article
    }

    collectionNews.insert(newDocument);

    console.log("(News_Team)Processing: " + team.id);

    News_ESPN(team.name.en, function(result) {
        article = article.concat(result);
        collectionNews.update({team: team.id}, {$set: {article: article}});

        console.log('-------------------------------------------');
        
        News_ESPN(team.alias.en, function(result) {
            article = article.concat(result);
            collectionNews.update({team: team.id}, {$set: {article: article}});

            console.log('-------------------------------------------');

            News_Yahoo(team.name.en, function(result) {
                article = article.concat(result);
                collectionNews.update({team: team.id}, {$set: {article: article}});

                console.log('-------------------------------------------');

                News_Yahoo(team.alias.en, function(result) {
                    article = article.concat(result);
                    collectionNews.update({team: team.id}, {$set: {article: article}});

                    console.log('-------------------------------------------');

                    News_Naver(team.name.kr, function(result) {
                        article = article.concat(result);
                        collectionNews.update({team: team.id}, {$set: {article: article}});

                        console.log('-------------------------------------------');

                        News_Naver(team.alias.kr, function(result) {
                            article = article.concat(result);

                            collectionNews.update({team: team.id}, {$set: {article: article}})
                                .catch((err) => {
                                    console.log("(News_Team)Error while inserting news");
                                })
                                .then(() => {
                                    db.close();
                                    console.log("(News_Team)" + team.id + " End");
                                });
                        });
                    });
                });
            });
        });
    });
}

module.exports = News_Team;
