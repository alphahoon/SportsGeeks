const teams = [{
        "id": "ManUtd",
        "type": "team",
        "name": {
            "en": "Manchester United",
            "kr": "맨체스터 유나이티드"
        },
        "alias": {
            "en": "Man Utd",
            "kr": "맨유"
        },
        "img": "teams/manutd.png"
    },
    {
        "id": "Chelsea",
        "type": "team",
        "name": {
            "en": "Chelsea FC",
            "kr": "첼시"
        },
        "alias": {
            "en": "Chelsea",
            "kr": "첼시"
        },
        "img": "teams/chelsea.png",
    }
];

const monk = require('monk')
const url = 'localhost:27017/main';
const db = monk(url);

db.then(() => {
    console.log('Connected correctly to server');
});

const collection = db.get('teams');
console.log(teams);
collection.remove();
collection.insert(teams)
    .then((docs) => {
        console.log('Successfully added teams keywords.');
    })
    .catch((err) => {
        console.log('Error while adding teams keywords.');
    })
    .then(() => db.close());
