const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const db = req.app.get('db');

    var json = {};
    res.json(json);
    /*
    schedules.find()
        .then((data) => {
            json.status = 'OK';
            json.schedules = data;
            res.json(json);
        })
        .catch((err) => {
            var msg = 'error while finding schedules data.';
            console.log(msg.red);
            console.log(err);
            json = {};
            json.status = 'ERROR';
            json.description = msg;
            res.json(json);
        });
    */
});

module.exports = router;
