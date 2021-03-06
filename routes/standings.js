const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    const db = req.app.get('db');
    const bodyObj = req.app.get('bodyObj');
    const standings = db.get('standings');

    var json = {};
    standings.find({league: bodyObj.league})
        .then((data) => {
            json.status = 'OK';
            json.data = data;
            res.json(json);
        })
        .catch((err) => {
            var msg = 'error while finding standings data.';
            console.log(msg.red);
            console.log(err);
            json = {};
            json.status = 'ERROR';
            json.description = msg;
            res.json(json);
        });
});

module.exports = router;
