const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const db = req.app.get('db');
    const sports = db.get('sports');
    const leagues = db.get('leagues');
    const teams = db.get('teams');
    const schedules = db.get('sports');

    var json = {};
    sports.find()
        .then((data) => {
            json.sports = data;
            leagues.find()
                .then((data) => {
                    json.leagues = data;
                    teams.find()
                        .then((data) => {
                            json.teams = data;
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
                        })
                        .catch((err) => {
                            var msg = 'error while finding teams data.';
                            console.log(msg.red);
                            console.log(err);
                            json = {};
                            json.status = 'ERROR';
                            json.description = msg;
                            res.json(json);
                        });
                })
                .catch((err) => {
                    var msg = 'error while finding leagues data.';
                    console.log(msg.red);
                    console.log(err);
                    json = {};
                    json.status = 'ERROR';
                    json.description = msg;
                    res.json(json);
                });
        })
        .catch((err) => {
            var msg = 'error while finding sports data.';
            console.log(msg.red);
            console.log(err);
            json = {};
            json.status = 'ERROR';
            json.description = msg;
            res.json(json);
        });
});

module.exports = router;
