const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const db = req.app.get('db');
    const collection = db.get('trends');

    var json = {};
    collection.find()
        .then((data) => {
            json.status = 'OK';
            json.trends = data;
            res.json(json);
        })
        .catch((err) => {
            var msg = 'error while finding trends data.';
            console.log(msg.red);
            console.log(err);
            json.status = 'ERROR';
            json.description = msg;
            res.json(json);
        });
});

module.exports = router;
