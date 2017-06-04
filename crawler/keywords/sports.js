var sports = [{
        "id": "Soccer",
        "type": "sport",
        "name": {
            "en": "Soccer",
            "kr": "축구"
        },
        "alias": {
            "en": "Soccer",
            "kr": "축구"
        },
        "img": "sports/soccer.png"
    },
    {
        "id": "Football",
        "type": "sport",
        "name": {
            "en": "Football",
            "kr": "미식축구"
        },
        "alias": {
            "en": "Football",
            "kr": "미식축구"
        },
        "img": "sports/football.png"
    },
    {
        "id": "Baseball",
        "type": "sport",
        "name": {
            "en": "Baseball",
            "kr": "야구"
        },
        "alias": {
            "en": "Baseball",
            "kr": "야구"
        },
        "img": "sports/baseball.png"
    },
    {
        "id": "Basketball",
        "type": "sport",
        "name": {
            "en": "Basketball",
            "kr": "농구"
        },
        "alias": {
            "en": "Basketball",
            "kr": "농구"
        },
        "img": "sports/basketball.png"
    }
];

const monk = require('monk')
const url = 'localhost:27017/main';
const db = monk(url);

db.then(() => {
    console.log('Connected correctly to server');
});

const collection = db.get('sports');
console.log(sports);
collection.remove();
collection.insert(sports)
    .then((docs) => {
        console.log('Successfully added sports keywords.');
    })
    .catch((err) => {
        console.log('Error while adding sports keywords.');
    })
    .then(() => db.close());
