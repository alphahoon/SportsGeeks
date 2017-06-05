const monk = require('monk')
const url = 'localhost:27017/main';
const db = monk(url);

db.then(() => {
    console.log('Connected correctly to server');
});

const collection = db.get('sports');
const test = db.get('test');

collection.findOne({ id: 'Soccer' })
    .then((sport) => {
        console.log('found');
        console.log(sport);
        var testDocument = {
            "sport": sport,
            "others": "test"
        };
        test.insert(testDocument);
    })
    .catch((err) => {
        console.log('not found');
    })
    .then(() => db.close());
