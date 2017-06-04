const leagues = [{
        "id": "KLeague",
        "type": "league",
        "country": {
            "en": "Korea",
            "kr": "한국",
            "img": "country/korea.png"
        },
        "name": {
            "en": "K League Classic",
            "kr": "K 리그"
        },
        "alias": {
            "en": "K League",
            "kr": "K 리그"
        },
        "img": "leagues/kleague.png"
    },
    {
        "id": "EPL",
        "type": "league",
        "country": {
            "en": "England",
            "kr": "영국",
            "img": "country/england.png"
        },
        "name": {
            "en": "English Premier League",
            "kr": "프리미어 리그"
        },
        "alias": {
            "en": "EPL",
            "kr": "EPL"
        },
        "img": "leagues/epl.png"
    },
    {
        "id": "Liga",
        "type": "league",
        "country": {
            "en": "Spain",
            "kr": "스페인",
            "img": "country/spain.png"
        },
        "name": {
            "en": "Primera Liga",
            "kr": "프리메라 리가"
        },
        "alias": {
            "en": "La Liga",
            "kr": "라 리가"
        },
        "img": "leagues/liga.png"
    },
    {
        "id": "SerieA",
        "type": "league",
        "country": {
            "en": "Italia",
            "kr": "이탈리아",
            "img": "country/italia.png"
        },
        "name": {
            "en": "Serie A",
            "kr": "세리에 A"
        },
        "alias": {
            "en": "Serie A",
            "kr": "세리에 A"
        },
        "img": "leagues/serie.png"
    },
    {
        "id": "Bundesliga",
        "type": "league",
        "country": {
            "en": "Germany",
            "kr": "독일",
            "img": "country/germany.png"
        },
        "name": {
            "en": "Bundesliga",
            "kr": "분데스리가"
        },
        "alias": {
            "en": "Bundesliga",
            "kr": "분데스리가"
        },
        "img": "leagues/bundesliga.png"
    },
    {
        "id": "Ligue1",
        "type": "league",
        "country": {
            "en": "France",
            "kr": "프랑스",
            "img": "country/france.png"
        },
        "name": {
            "en": "Ligue 1",
            "kr": "리그 1"
        },
        "alias": {
            "en": "Ligue 1",
            "kr": "리그 1"
        },
        "img": "leagues/ligue1.png"
    },
    {
        "id": "MLS",
        "type": "league",
        "country": {
            "en": "USA",
            "kr": "미국",
            "img": "country/usa.png"
        },
        "name": {
            "en": "Major League Soccer",
            "kr": "메이저리그 사커"
        },
        "alias": {
            "en": "MLS",
            "kr": "MLS"
        },
        "img": "leagues/mls.png"
    },
    {
        "id": "NFL",
        "type": "league",
        "country": {
            "en": "USA",
            "kr": "미국",
            "img": "country/usa.png"
        },
        "name": {
            "en": "National Football League",
            "kr": "내셔널 풋볼 리그"
        },
        "alias": {
            "en": "NFL",
            "kr": "NFL"
        },
        "img": "leagues/nfl.png"
    },
    {
        "id": "KBO",
        "type": "league",
        "country": {
            "en": "Korea",
            "kr": "한국",
            "img": "country/korea.png"
        },
        "name": {
            "en": "Korea Baseball Organization League",
            "kr": "KBO 리그"
        },
        "alias": {
            "en": "KBO",
            "kr": "KBO"
        },
        "img": "leagues/nfl.png"
    },
    {
        "id": "MLB",
        "type": "league",
        "country": {
            "en": "USA",
            "kr": "미국",
            "img": "country/usa.png"
        },
        "name": {
            "en": "Major League Baseball",
            "kr": "메이저리그 야구"
        },
        "alias": {
            "en": "MLB",
            "kr": "MLB"
        },
        "img": "leagues/mlb.png"
    },
    {
        "id": "NPB",
        "type": "league",
        "country": {
            "en": "Japan",
            "kr": "일본",
            "img": "country/japan.png"
        },
        "name": {
            "en": "Nippon Professional Baseball",
            "kr": "NPB"
        },
        "alias": {
            "en": "NPB",
            "kr": "NPB"
        },
        "img": "leagues/npb.png"
    },
    {
        "id": "KBL",
        "type": "league",
        "country": {
            "en": "Korea",
            "kr": "한국",
            "img": "country/korea.png"
        },
        "name": {
            "en": "Korea Basketball League",
            "kr": "KBL"
        },
        "alias": {
            "en": "KBL",
            "kr": "KBL"
        },
        "img": "leagues/kbl.png"
    },
    {
        "id": "NBA",
        "type": "league",
        "country": {
            "en": "USA",
            "kr": "미국",
            "img": "country/usa.png"
        },
        "name": {
            "en": "National Basketball Association League",
            "kr": "NBA"
        },
        "alias": {
            "en": "NBA",
            "kr": "NBA"
        },
        "img": "leagues/nba.png"
    }
];

const monk = require('monk')
const url = 'localhost:27017/main';
const db = monk(url);

db.then(() => {
    console.log('Connected correctly to server');
});

const collection = db.get('leagues');
console.log(leagues);
collection.remove();
collection.insert(leagues)
    .then((docs) => {
        console.log('Successfully added league keywords.');
    })
    .catch((err) => {
        console.log('Error while adding league keywords.');
    })
    .then(() => db.close());
